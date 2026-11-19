# Entitats de Campanar

Catàleg web de les entitats del barri de Campanar (València), generat amb
[catalog-generator](https://github.com/pauginer/catalog-generator).

- **Dades**: la primera pestanya (*Respostes*) del [full de càlcul](https://docs.google.com/spreadsheets/d/1W4JV5WIJp6YiaZ9mHnu2s63h3tGu9JtpqyknmqVeKCo/edit?gid=1149689709),
  que s'omple amb el [formulari](https://forms.gle/2dbj3MyJZKnsjNWbA). Una fila = una entitat.
  La columna *Email Address* no es publica ni es pot cercar.
- **Plantilles**: `templates/card.md` (targeta), `templates/item.md` (fitxa), `templates/index.md` (portada),
  `templates/style.css`, `pages/sobre.md`.
- `static/assets/site.js` tradueix al català els textos del cercador i dels filtres i obri els enllaços externs en una pestanya nova.

```bash
python3 catalog.py serve
```

Obri http://localhost:8000. Les dades es descarreguen del full a cada construcció.
A GitHub Pages, el workflow reconstrueix el lloc a cada push i cada dia a les 06:00 UTC.
