```
const searchInput = document.querySelector("#event-search-input");
searchInput.addEventListener("input", updateEvents);
```
yukarıdaki kod, html sayfası içeriğindeki ```event-search-input``` idli elementi seçer ve onun input eventinde tetiklenmek üzere ```updateEvents``` fonksiyonunu atar.

<hr>

```
const query = searchInput.value.trim().replace(/\s+/g, " ").toLocaleLowerCase("tr-TR");
```
yukarıdaki kodda ise event-search-input idli elementin value özelliği ile içerisine girilen metne erişerek ```trim()``` fonksiyonuyla başındaki ve sonundaki boşlukları temizler. Hemen ardından ```replace``` fonksiyonunu ```/\s+/g, " "``` parametreleri ile çalıştırarak metnin içeriğindeki fazla boşlukları kırpar. ```toLocaleLowerCase("tr-TR")``` ile metni türkçe formatında küçük harfe çevirir. En sonunda bize kelimeler arası 1 boşluklu, başında ve sonunda boşluk olmayan tamamı küçük harfli standart bir metin verir

| Girdi | Çıktı |
| :--- | :--- |
| `"   Github   atölyesi   "` | `"Github atölyesi"` |