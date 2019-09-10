# Test pour Webpopulation par Sarah Güngör

<strong>Correction HTML</strong>
<br>
<br>
<p>J'ai bien entendu réindenté le document et ajouté les bonnes balises HTML5 ; entres autres pour structurer le tout (<code>header</code>, <code>main</code>, <code>footer</code>), lorsque des blocks correspondaient à une balise bien précise je les ai modifiés (<code>nav</code>, <code>ul</code>, <code>li</code>, <code>section</code>), pour le reste j'ai laissé les <code>div</code>, bien qu'elles n'aient pas de réelle valeure sémantique.</p>
<br>
<p>Bien qu'il ne soit pas recommandable de laisser des balises vides, j'ai décidé de le faire afin de pouvoir utiliser le système de sprite pour les icônes.</p>
<br>
<p>J'ai également renommé et ajouté certaines classes, bien que j'utilise habituellement une autre convention d'écriture (BEM, avec des classes en lowerCamelCase pour les blocks et une syntaxe pour les élements et les modifiers) j'ai essayé ici de suivre le style d'écriture fourni initialement.</p>
<br>
<br>
<strong>CSS et intégration</strong>
<br>
<p>J'ai décidé d'appeler les éléments directement par leur classe ou bien par leur balise précédée de la classe de leur parent. J'ai utilisé des pseudo-éléments pour cibler des cas uniques, pour ajouter une décoration ou bien une transition. J'ai décidé de ne pas donner de classe aux éléments parents que je savais uniques dans le document (ex: <code>header</code>, <code>nav</code>).</p>
<br>
<p>J'ai décidé d'utiliser des SVG pour les icônes de la partie "user settings" car, contrairement à ceux du "wrapper", ils sont amenés à être modifiés à l'interraction de l'utilisateur et le format SVG le permet. J'ai pris la liberté d'ajouter une balise SVG au document pour utiliser le système de <code>symbol</code> qui permet d'appeler facilement un SVG par son id dans le HTML et de le modifier dans la CSS. Étant donné qu'il s'agit d'un format scalable, les icônes étaient par conséquent de meilleure qualité et plus facile à intégrer.</p>
<br>
<p>J'ai décidé de faire le rollover du "sub-menu" en CSS car cela ne nécessitait pas de JS. Par ailleurs si j'avais du intégrer tout le contenu des autres élements du menu je l'aurais probablement généré en JS pour éviter de trop nombreuses répétitions dans le HTML.</p>
<br>
<p>J'ai pris la liberté de créer des fichiers CSS pour chaque gros blocs que j'ai intégrés && || modifiés, ainsi qu'un petit reset. Si j'avais pu utiliser Sass j'aurais fait des imports de mes fichiers dans le fichier principal "styles.scss", ce qui m'aurait permis de mieux oragniser le projet et d'éviter les liens dans l'index.</p>
