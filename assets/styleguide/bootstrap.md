# Jak używać?

# Typografia

## Nagłówki

```html_example
<h1>Lorem.</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, delectus!</p>
<h2>Esse.</h2>
<p>Fugit dolor quas nostrum sit commodi porro labore aperiam accusantium!</p>
<h3>Neque.</h3>
<p>Quae totam laboriosam, tempore aliquam nihil, ut perspiciatis vitae repellendus.</p>
<h4>Dignissimos.</h4>
<p>Vero ipsum quisquam expedita earum corrupti eveniet maiores necessitatibus nulla?</p>
<h5>Dolore.</h5>
<p>Quia, quibusdam magnam accusantium eligendi at nesciunt omnis, tenetur. Dolor.</p>
<h6>Ullam!</h6>
<p>In dolores tempore doloribus. Quas sint iste cumque, suscipit officiis.</p>
```
## Cytat
```html_example
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```
# Formularze
AA
## Form-group
```html_example
<p>
	<div class="input-group">
	  <span class="input-group-addon" id="basic-addon1">@</span>
	  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
	</div>
</p>

<p>
	<div class="input-group">
	  <input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
	  <span class="input-group-addon" id="basic-addon2">@example.com</span>
	</div>
</p>

<p>
	<div class="input-group">
	  <span class="input-group-addon">$</span>
	  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
	  <span class="input-group-addon">.00</span>
	</div>
</p>

<p>
	<label for="basic-url">Your vanity URL</label>
	<div class="input-group">
	  <span class="input-group-addon" id="basic-addon3">https://example.com/users/</span>
	  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
	</div>
</p>
```

# Przyciski
```html_example
<p>
	<button type="button" class="btn btn-primary">Primary button</button>
	<button type="button" class="btn btn-light">Light button</button>
	<button type="button" class="btn btn-dark">Dark button</button>
	<button type="button" class="btn btn-default">Button</button>
</p>
```
## Przyciski aktywne
```html_example
<p>
	<button type="button" class="btn btn-primary btn-lg active">Primary button</button>
	<button type="button" class="btn btn-light btn-lg active">Light button</button>
	<button type="button" class="btn btn-dark btn-lg active">Dark button</button>
	<button type="button" class="btn btn-default btn-lg active">Button</button>
</p>

```
## Przyciski nieaktywne
```html_example
<p>
	<button type="button" class="btn btn-primary btn-lg disabled">Primary button</button>
	<button type="button" class="btn btn-light btn-lg disabled">Light button</button>
	<button type="button" class="btn btn-dark btn-lg disabled">Dark button</button>
	<button type="button" class="btn btn-default btn-lg disabled">Button</button>
</p>

```

# Dropdown
```html_example
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
```
# Navbar
```html_example
<nav class="navbar navbar-default" role="navigation">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">Title</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse navbar-ex1-collapse">
			<ul class="nav navbar-nav">
				<li class="active"><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#">Link</a></li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li><a href="#">Action</a></li>
						<li><a href="#">Another action</a></li>
						<li><a href="#">Something else here</a></li>
						<li><a href="#">Separated link</a></li>
					</ul>
				</li>
			</ul>
		</div><!-- /.navbar-collapse -->
	</div>
```


