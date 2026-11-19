<p class="back"><a href="$home">&larr; Totes les entitats</a></p>

<div class="entity-head">
<div class="entity-logo card-logo" data-cat="$F">{{#if E}}<img src="$E" alt="Logotip de $title" onerror="this.parentNode.classList.add('no-img');this.remove()">{{/if}}</div>
<div>
<p class="entity-cat"><a class="tag" data-cat="$F" href="${home}?categoria=$F">$F</a></p>
<h1>$title</h1>
<p class="lead">$C</p>
</div>
</div>

{{#if D}}
> $D
{{/if}}

<div class="entity-body">
<div class="entity-main">

{{#if H}}
## Què fem

$H
{{/if}}

{{#if I}}
## Què oferim

$I
{{/if}}

{{#if K}}
## Activitats

$K
{{/if}}

</div>
<aside class="entity-side">

{{#if G}}
## Contacte

$G
{{/if}}

{{#if J}}
## Ubicació

$J

{{#if J != "On-line"}}<p><a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=$J, Campanar, València">Veure al mapa &rarr;</a></p>{{/if}}
{{/if}}

</aside>
</div>

<nav class="pager">{{#if prev_url}}<a class="prev" href="$prev_url" rel="prev"><span>&larr; Anterior</span>$prev_title</a>{{else}}<span></span>{{/if}}{{#if next_url}}<a class="next" href="$next_url" rel="next"><span>Següent &rarr;</span>$next_title</a>{{/if}}</nav>
