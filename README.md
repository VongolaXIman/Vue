# Vue
Self-Learning

# VSCode plugin
[https://www.jianshu.com/p/23a5d6194a4b](http://)  
[https://noob.tw/eslint/](http://)  
ESLint  
Vetur  
[https://github.com/VongolaXIman/Vue/blob/main/learning/pic/1.PNG](http://)  
EditorConfig fo VS Code  
EditorConfigGenerator

## 安裝 node.js
LTS 版本

## 安裝 vue-cli
<pre><code>
npm install -g @vue/cli
</code></pre>

## 建立 Vue 專案
<pre><code>
vue create 專案名稱
->進行相關設置  
cd vue-tutorial  
npm run serve
->頁面在 localhost:8080 監聽
</code></pre>

## 專案架構
![image](https://github.com/VongolaXIman/Vue/blob/main/learning/pic/1.PNG)  
node_modules：存放相關套件的位置  
public：以 SPA 方式設計的網頁，作為外框所需資源存放的位置  
src：vue 核心開發內容存放的位置  
assets：圖片等靜態檔案存放位置  
components：components 存放位置  
views：views 存放位置  
main.js：Vue app 載入設置及實際載入 Vue instance 的 script  
router.js：安裝了 Router 自動產生的 script，在此設定 router config  
store.js：安裝了 Vuex 自動產生的 script，在此控制 store 狀態  
tests：與測試相關的設置

### Components
一個 component 可以如下方式來建立  
main.js  
![image](https://github.com/VongolaXIman/Vue/blob/main/learning/pic/4.PNG)  

index.html  
![image](https://github.com/VongolaXIman/Vue/blob/main/learning/pic/3.PNG)  

### component 物件屬性
一個 component 物件常用的屬性有：  
1.data：作為頁面資料存放的位置，在 components 中必須為一個回傳物件的方法  
2.props：作為傳入 component 的參數  
3.methods：component 中使用到的頁面方法  
4.computed：經過計算更新值的屬性  

### Data-binding
#### View to ViewModel:  
v-model="searchText"  
等同  
v-bind:value="searchText"  
v-on:input="searchText = $event.target.value  
是透過 事件 來更新 data 屬性值
#### 陣列渲染 v-for
v-for="item in data" :key="item.id"
#### 條件渲染 v-if、v-else-if、v-else、v-show
v-if="condition" 條件1  
v-else 條件2  

### 生命週期
[https://medium.com/pierceshih/vue-js-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-day14-vue%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F-65bc934dfd47](http://)

### Guards Methods 
```
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloworld',
      component: HelloWorld,
      beforeEnter (to, from, next) {
        next();
      }
    }
  ]
});
```
beforeEach 每個路由要被執行之前，都會先經過這裡，他會傳入三個參數：  
to 你要去的路由位置。  
from 你從哪一個路由位置進來，如果沒有，預設是 null。  
next() 繼續往下執行的回呼函式，你必須要呼叫他才能繼續執行。  
[https://ithelp.ithome.com.tw/articles/10214740](http://)

## .Net Core-api回傳json處理方法

``` bash
using System.Text.Json;

# 假設有個 Student 類別
class Student {
    public string Name { get; set; }
    public int Age { get; set; }
}

# JsonSerializer.Serialize() 方法將物件序列化成 JSON 文字
var student = new Student {
    Name = "Poy Chang",
    Age = 20
};
var json = JsonSerializer.Serialize<Student>(student);
//結果: {"Name":"Poy Chang","Age":20}

# 格式化排版
var options = new JsonSerializerOptions
{
    WriteIndented = true
};
var json = JsonSerializer.Serialize<Student>(student, options);
//結果:
{
  "Name": "Poy Chang",
  "Age": 20
}

# 將文字反序列化成物件
var json = "{\"Name\":\"Poy Chang\",\"Age\":20}";
var student = JsonSerializer.Deserialize<Student>(json);

# 動調整序列化後的屬性名稱，而不想更動 C# 原本的屬性名稱
using System.Text.Json.Serialization;

class Student {
    [JsonPropertyName("studentName")]
    public string Name { get; set; }
    [JsonPropertyName("studentAge")]
    public int Age { get; set; }
}

//結果:
{
  "studentName": "Poy Chang",
  "studentAge": 20
}

# 轉換成 Enum 
[JsonConverter(typeof(JsonStringEnumConverter))]
```

## .Net Core-EntityFramework效能寫法

``` bash
# 立即執行與延遲執行
//在學習 Linq to Objects 的時候會有立即執行與延遲執行，同樣的在 Linq to Entities 也適用，比如 .Count()、.ToList()，是立即執行，它們會立即對 SQL 發動命令；where 則是延遲執行，需要調用 ToList()、或是 foreach 命令，才會把命令丟給 SQL，以下區段，有經驗的開發者，一眼就能看出問題

void Main()
{
	using (var dbContext = new AdventureWorksDbContext())
	{
		dbContext.People
				 .Where(p => p.BusinessEntityID == 1)
				 .Select(p => new
				 {
					 p.BusinessEntityID,
					 p.ModifiedDate
				 })
				 .ToList()
				 .Dump("取回過濾後資料");

	}
}

# 查詢後不快取
//EF 預設會將已查詢的結果 cache 起來放兩份一份在 DbContext，一份在DbContext.DbSet.Local，若你不需要快取資料，調用 AsNoTracking
void Main()
{
      var db = new AdventureWorks2012DbContext();
       var query1 = db.People.Where(p => p.BusinessEntityID == 1).Select (p => 
    new
    {
        p.BusinessEntityID,    
        p.ModifiedDate
    });
       query1.AsNoTracking().Dump();
}

# 用不到消極試載入時，關閉它
//假若，開發架構有分 DAL，查完之後就會關閉連線，也就是調用 ToList、FirstOrDefault 等等立即執行的方法，直接回傳資料，不會讓用戶使用消極式載入，這時就用不到 Lazy Loading ，就可以關掉它

//產生Proxy object，用來處理關聯式資料消極式載入 Lazy Loading
dbContext.Configuration.ProxyCreationEnabled = false;
//消極式載入
dbContext.Configuration.LazyLoadingEnabled = false;
```

# 停用追蹤狀態
//db.Configuration.AutoDetectChangesEnabled = false;

void Main()
{
	using (var dbContext = CreateDbContext())
	{
		dbContext.People.FirstOrDefault().Dump();
	}

	AdventureWorksDbContext CreateDbContext()
	{
		var dbContext = new AdventureWorksDbContext();
		dbContext.Configuration.AutoDetectChangesEnabled = false;
		dbContext.Configuration.LazyLoadingEnabled = false;
		dbContext.Configuration.ProxyCreationEnabled = false;
		return dbContext;
	
```
