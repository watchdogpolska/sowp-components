# Jak używać?


## JavaScript

## CSS
## SCSS

## Bower
Z powodu błędów w bibliotece Masonry wymagane jest wykorzystanie wcześniej skompilowanej werjsi.
W tym celu do ``bower.json`` należy dopisać
```json
  "overrides": {
    "masonry": {
      "main": "./dist/masonry.pkgd.js",
      "dependencies": {
      }
    }
  }
```




# Card

##  Style

```html_example
<div class="row">
  <div class="col-md-4">
    <div class="sowp-card sowp-card--brand">
      <div class="sowp-card__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore a, possimus eius in ex et nisi deserunt excepturi provident sed aliquam ea voluptatibus qui officia quam doloribus modi quis incidunt!</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="sowp-card sowp-card--light">
      <div class="sowp-card__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, nisi provident voluptatum nobis dignissimos vel! Doloribus accusamus optio autem dolores adipisci consectetur harum maiores in. Possimus corporis similique vero, facilis.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="sowp-card sowp-card--dark">
      <div class="sowp-card__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, nisi provident voluptatum nobis dignissimos vel! Doloribus accusamus optio autem dolores adipisci consectetur harum maiores in. Possimus corporis similique vero, facilis.</p>
      </div>
    </div>
  </div>
</div>
```

## Z tytułem 

````html_example
<div class="sowp-card sowp-card--brand">
  <div class="sowp-card__heading">
   <h1>Lorem ipsum dolor.</h1>
  </div>
  <div class="sowp-card__content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore a, possimus eius in ex et nisi deserunt excepturi provident sed aliquam ea voluptatibus qui officia quam doloribus modi quis incidunt!</p>
  </div>
</div>
````

## Z obrazem nagłówkowym
````html_example
<div class="sowp-card sowp-card--light">
  <div class="sowp-card__image">
    <a href="http://google.com">
      <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
    </a>
  </div>
  <div class="sowp-card__content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
  </div>
</div>
<div class="row">
  <div class="col-md-6">
    <div class="sowp-card sowp-card--brand">
      <div class="sowp-card__image">
        <a href="http://google.com">
          <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
        </a>
      </div>
      <div class="sowp-card__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
      </div>
    </div>
  </div>
</div>
````




# Bg

```html_example
<div class="row">
  <div class="col-md-4">
    <div class="sowp-bg sowp-bg--brand">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore a, possimus eius in ex et nisi deserunt excepturi provident sed aliquam ea voluptatibus qui officia quam doloribus modi quis incidunt!</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="sowp-bg sowp-bg--light">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, nisi provident voluptatum nobis dignissimos vel! Doloribus accusamus optio autem dolores adipisci consectetur harum maiores in. Possimus corporis similique vero, facilis.</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="sowp-bg sowp-bg--dark">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, nisi provident voluptatum nobis dignissimos vel! Doloribus accusamus optio autem dolores adipisci consectetur harum maiores in. Possimus corporis similique vero, facilis.</p>
    </div>
  </div>
</div>
```




# Masonry's Grid
````html
<div class="sowp-grid sowp-grid--to-3">
  <div class="sowp-grid--gutter"></div>
  <div class="sowp-grid--item">
    <div class="sowp-card sowp-card--light">
      <div class="sowp-card__image">
        <a href="http://google.com">
          <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
        </a>
      </div>
      <div class="sowp-card__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
      </div>
    </div>
    <div class="sowp-grid--item sowp-card sowp-card--light">[...]</div>
    <div class="sowp-grid--item sowp-card sowp-card--light">[...]</div>
    <div class="sowp-grid--item sowp-card sowp-card--light">[...]</div>
    <div class="sowp-grid--item sowp-card sowp-card--light">[...]</div>
    <div class="sowp-grid--item sowp-card sowp-card--light">[...]</div>
    <div class="sowp-grid--item sowp-card sowp-card--light">[...]</div>
    <div class="sowp-grid--item sowp-card sowp-card--light">[...]</div>
  </div>
</div>
````
<div class="sowp-grid sowp-grid--to-3">
  <div class="sowp-grid--gutter"></div>
  <div class="sowp-grid--item"></div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
  <div class="sowp-grid--item sowp-card sowp-card--light">
    <div class="sowp-card__image">
      <a href="http://google.com">
        <img src="http://siecobywatelska.pl/wp-content/uploads/2015/08/Adam_Bodnar-400x130.jpg" alt="" />
      </a>
    </div>
    <div class="sowp-card__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores eaque repellendus aliquid numquam asperiores. Nemo itaque ab amet, sed minima voluptate exercitationem, libero iusto, quae provident nostrum alias quas.</p>
    </div>
  </div>
</div>




# Navbar
````html_example
<div class="sowp-navbar">
  <div class="sowp-navbar__header sowp-navbar-header">
    <div class="sowp-navbar-header__left">
      <a href="#" class="sowp-navbar-header__item">EN</a>
    </div>
    <div class="sowp-navbar-header__right">
      <a href="#" class="sowp-navbar-header__item sowp-navbar__toggle">MENU</a>
    </div>
    <div class="sowp-navbar-header__center">
      <a href="#" class="sowp-navbar-header__item sowp-navbar-header__item--highlight">Wspieraj nas</a>
    </div>
  </div>
  <div class="sowp-navbar__nav">
    <div class="sowp-navbar__content">
      <ul class="sowp-navbar-nav-menu">
        <li class="sowp-navbar-nav-menu__item"><a href="#">Lorem.</a></li>
        <li class="sowp-navbar-nav-menu__item"><a href="#">Incidunt!</a></li>
        <li class="sowp-navbar-nav-menu__item"><a href="#">Esse.</a></li>
        <li class="sowp-navbar-nav-menu__item"><a href="#">Nisi.</a></li>
        <li class="sowp-navbar-nav-menu__item"><a href="#">Similique.</a></li>
        <li class="sowp-navbar-nav-menu__item"><a href="#">Iste!</a></li>
      </ul>
      <hr class="sowp-navbar-nav__divider" />
      <ul class="sowp-navbar-nav-icons">
        <li class="sowp-navbar-nav-icons--item"><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li class="sowp-navbar-nav-icons--item"><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li class="sowp-navbar-nav-icons--item"><a href="#"><i class="fa fa-facebook"></i></a></li>
      </ul>
    </div>
  </div>
</div>
````




# Scroll to top
````html_example
<a href="#" class="sowp-scroll-to-top">Do góry</a>
````

````html_example
<a href="#" class="sowp-scroll-to-top pull-right">Do góry</a>
````

````html_example
<a href="#" class="sowp-scroll-to-top center-block">Do góry</a>
````





# Forms - checkbox/radio

Do formularzy zalecam wykorzystanie Bootstrap 3, lecz z zastrzeżeneim dotyczącym pół typu `checkbox` i `radio`.

````html
<div class="checkbox">
  <input type="checkbox" id="checkbox3" checked>
  <label for="checkbox3">Check me out</label>
</div>
<div class="checkbox">
  <input type="checkbox" id="checkbox4">
  <label for="checkbox4">Check me out</label>
</div>
<div class="radio">
  <input type="radio" name="radio2" id="radio3" checked>
  <label for="radio3">Check me out</label>
</div>
<div class="radio">
  <input type="radio" name="radio2"  id="radio4">
  <label for="radio4">Check me out</label>
</div>
````
<div class="row">
  <div class="col-xs-12 col-md-6">
    <div class="checkbox" style="font-size: 36px">
      <input type="checkbox" id="checkbox1">
      <label for="checkbox1">Check me out</label>
    </div>
    <div class="checkbox" style="font-size: 36px">
      <input type="checkbox" checked id="checkbox2">
      <label for="checkbox2">Check me out</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="checkbox3" checked>
      <label for="checkbox3">Check me out</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="checkbox4">
      <label for="checkbox4">Check me out</label>
    </div>
  </div>
  <div class="col-xs-12 col-md-6">
    <div class="radio" style="font-size: 36px">
      <input type="radio" name="radio1" id="radio1">
      <label for="radio1">Check me out</label>
    </div>
    <div class="radio" style="font-size: 36px">
      <input type="radio" name="radio1" checked id="radio2">
      <label for="radio2">Check me out</label>
    </div>
    <div class="radio">
      <input type="radio" name="radio2" id="radio3" checked>
      <label for="radio3">Check me out</label>
    </div>
    <div class="radio">
      <input type="radio" name="radio2"  id="radio4">
      <label for="radio4">Check me out</label>
    </div>
  </div>
</div>






# Tabs
````html_example
<div class="sowp-cards-tabs">
  <div class="sowp-cards-tabs__item">
    <div class="sowp-card-tab sowp-card-tab--active">
      <div class="sowp-cards-tabs__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="sowp-cards-tabs__label">
        15 minuts
      </div>
    </div>
  </div>
  <div class="sowp-cards-tabs__item">
    <div class="sowp-card-tab">
      <div class="sowp-cards-tabs__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="sowp-cards-tabs__label">
        15 minuts
      </div>
    </div>
  </div>
  <div class="sowp-cards-tabs__item">
    <div class="sowp-card-tab">
      <div class="sowp-cards-tabs__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="sowp-cards-tabs__label">
        15 minuts
      </div>
    </div>
  </div>
  <div class="sowp-cards-tabs__item">
    <div class="sowp-card-tab">
      <div class="sowp-cards-tabs__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="sowp-cards-tabs__label">
        15 minuts
      </div>
    </div>
  </div>
</div>
````



# Timer Selector
````html_example
<div class="sowp-card sowp-card--brand">
  <div class="sowp-card__heading">
    <h1>Lorem ipsum dolor.</h1>
  </div>
  <div class="sowp-card__content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore a, possimus eius in ex et nisi deserunt excepturi provident sed aliquam ea voluptatibus qui officia quam doloribus modi quis incidunt!</p>
  </div>
  <div class="sowp-timer-selector">
    <div class="sowp-timer-selector__content">
      <a href="" class="sowp-timer-selector__item">
        <div class="sowp-timer-selector__icon"><i class="fa fa-question-circle-o"></i></div>
        <div class="sowp-timer-selector__label">Lorem.</div>
      </a>
      <a href="" class="sowp-timer-selector__item">
        <div class="sowp-timer-selector__icon"><i class="fa fa-question-circle-o"></i></div>
        <div class="sowp-timer-selector__label">Totam!</div>
      </a>
      <a href="" class="sowp-timer-selector__item">
        <div class="sowp-timer-selector__icon"><i class="fa fa-question-circle-o"></i></div>
        <div class="sowp-timer-selector__label">Expedita?</div>
      </a>
      <a href="" class="sowp-timer-selector__item">
        <div class="sowp-timer-selector__icon"><i class="fa fa-question-circle-o"></i></div>
        <div class="sowp-timer-selector__label">Iste.</div>
      </a>
    </div>
    <div class="sowp-timer-selector__indicator"></div>
  </div>
</div>
````



# Top menu
````html
<nav class="sowp-top-menu">
  <ul class="sowp-top-menu-section sowp-top-menu-section--right">
    <li>
      <a href="">Lorem.</a>
      <ul>
        <li><a href="">Lorem.</a></li>
        <li><a href="">Eligendi?</a></li>
        <li><a href="">Dolorem?</a></li>
        <li><a href="">Mollitia.</a></li>
      </ul>
    </li>
    <li>
      <a href="">Amet.</a>
    </li>
    [..]
  </ul>
  <ul class="sowp-top-menu-section sowp-top-menu-section--left">
    <li>
      <a href="">Praesentium.</a>
    </li>
    <li>
      <a href="">Neque!</a>
      [...]
    </li>
  </ul>
</nav>

````
<nav class="sowp-top-menu">
  <ul class="sowp-top-menu-section sowp-top-menu-section--right">
    <li>
      <a href="#">Lorem.</a>
      <ul>
        <li><a href="#">Lorem.</a></li>
        <li><a href="#">Eligendi?</a></li>
        <li><a href="#">Dolorem?</a></li>
        <li><a href="#">Mollitia.</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Amet.</a>
    </li>
    <li>
      <a href="#">Et.</a>
      <ul>
        <li><a href="">Lorem.</a></li>
        <li><a href="#">Sed?</a></li>
        <li><a href="#">Cupiditate!</a></li>
        <li><a href="#">Nobis.</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Voluptate.</a>
      <ul>
        <li><a href="#">Lorem.</a></li>
        <li><a href="#">Ut.</a></li>
        <li><a href="#">At!</a></li>
        <li><a href="#">Fuga.</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Voluptatum.</a>
      <ul>
        <li><a href="#">Lorem.</a></li>
        <li><a href="#">Hic.</a></li>
        <li><a href="#">Sed?</a></li>
        <li><a href="#">Reiciendis.</a></li>
      </ul>
    </li>
  </ul>
  <ul class="sowp-top-menu-section sowp-top-menu-section--left">
    <li>
      <a href="">Praesentium.</a>
    </li>
    <li>
      <a href="#">Neque!</a>
      <ul>
        <li><a href="#">Lorem.</a></li>
        <li><a href="#">Cupiditate.</a></li>
        <li><a href="#">Excepturi.</a></li>
        <li><a href="#">Ut?</a></li>
        <li><a href="#">Ipsum.</a></li>
        <li><a href="#">Quam!</a></li>
        <li><a href="#">Neque.</a></li>
      </ul>
    </li>
  </ul>
</nav>



# Vertical menu
````
.sowp-vertical-menu>.sowp-vertical-menu__list>ul.sowp-vertical-menu__list>.sowp-vertical-menu__item*5>a>Lorem1
````

````html_example
<div class="sowp-vertical-menu">
 <div class="sowp-vertical-menu__list">
   <ul class="sowp-vertical-menu__list">
     <li class="sowp-vertical-menu__item sowp-vertical-menu__item--active"><a href="#">Lorem.</a></li>
     <li class="sowp-vertical-menu__item"><a href="#">Non?</a></li>
     <li class="sowp-vertical-menu__item"><a href="#">Rerum!</a></li>
     <li class="sowp-vertical-menu__item"><a href="#">Nobis!</a></li>
     <li class="sowp-vertical-menu__item"><a href="#">Nisi!</a></li>
   </ul>
 </div>
</div>
````



# Icons
<table id="icon-table">
  <td>
    <div class="preview">
      <i class="isowp-circle-left"></i>
    </div>
    <label></label>
```
<i class="isowp-circle-left"></i>

```
  </td>
  <td>
    <div class="preview">
      <i class="isowp-circle-right"></i>
    </div>
    <label></label>
````
<i class="isowp-circle-right"></i>
````
  </td>
</table>




# Tabs list

````html
<div class="sowp-tabs-list">
  <div class="sowp-tabs-list__item is-expanded" id="tab-1">
    <div class="sowp-tabs-list__item-heading">Lorem ipsum dolor.</div>
    <div class="sowp-tabs-list__item-body">
      <p>[...]</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-2">
    <div class="sowp-tabs-list__item-heading">Lorem ipsum dolor.</div>
    <div class="sowp-tabs-list__item-body">
      <p>[...]</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-3">
    <div class="sowp-tabs-list__item-heading">Ratione, officiis illo.</div>
    <div class="sowp-tabs-list__item-body">
      <p>[...]</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-4">
    <div class="sowp-tabs-list__item-heading">Eveniet, necessitatibus, rerum?</div>
    <div class="sowp-tabs-list__item-body">
      <p>[...]</p>
    </div>
  </div>
</div>

````
<div class="sowp-tabs-list">
  <div class="sowp-tabs-list__item is-expanded" id="tab-1">
    <div class="sowp-tabs-list__item-heading">Lorem ipsum dolor.</div>
    <div class="sowp-tabs-list__item-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium saepe, velit laudantium repellat. Optio animi aperiam molestias, eius deserunt, quis ex quaerat earum sunt maiores consequuntur quo porro dolores unde.</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-2">
    <div class="sowp-tabs-list__item-heading">Lorem ipsum dolor.</div>
    <div class="sowp-tabs-list__item-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla culpa ipsa, maiores, totam expedita non. Eaque ratione porro debitis consectetur atque mollitia, quo doloremque reprehenderit adipisci itaque! Explicabo, fugit, repellendus.</p>
      <p>Doloribus maxime molestiae debitis illum adipisci, consectetur minus ex facilis officiis vero, obcaecati modi. Quam non architecto, inventore quae saepe ipsam quis eveniet accusantium, eaque et pariatur sit perspiciatis, aperiam!</p>
      <p>Est error accusamus cum repellendus quo eos voluptates delectus corrupti nobis, deserunt a blanditiis dolore sunt voluptatibus pariatur, enim obcaecati fugiat quae, dolores harum. Illum, aut similique eos minus dolores.</p>
      <p>Veniam nesciunt similique voluptas nobis accusantium voluptates fugiat ad officiis! Magni unde vitae quos nulla laborum error, ipsa blanditiis in, enim ab neque voluptatibus sed id molestias veniam debitis aperiam?</p>
      <p>Vitae explicabo veniam, dolore magnam numquam placeat harum, nihil provident aliquam sint aliquid consequuntur, nemo iure qui illum? Quibusdam eius delectus sapiente deleniti totam doloremque magnam dolor necessitatibus sint. Qui!</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-3">
    <div class="sowp-tabs-list__item-heading">Ratione, officiis illo.</div>
    <div class="sowp-tabs-list__item-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic labore rem commodi odio debitis aperiam iure, ipsam animi delectus laboriosam, architecto, aut, cumque facilis corporis molestias? Hic provident sint dignissimos.</p>
      <p>Voluptatem ut tempore magni facere? Laborum odio, quasi eligendi suscipit quod sunt, aliquam culpa veniam numquam quisquam quidem cumque, inventore optio nostrum voluptatibus rem, necessitatibus voluptate ab cum explicabo doloribus.</p>
      <p>Quidem, tenetur, accusantium. Nulla dolorem ipsa minima earum facere doloribus soluta error a nobis, at ut qui ullam deserunt inventore quisquam dignissimos obcaecati dolores impedit quam rerum, facilis amet vitae!</p>
      <p>Enim omnis, accusantium! Accusantium dolorem obcaecati, maiores, iste excepturi temporibus aut. Culpa animi alias earum cupiditate totam laborum consectetur debitis eligendi, harum eos mollitia, consequuntur nobis. Ut est laudantium unde.</p>
      <p>Natus delectus vero similique corporis ullam aspernatur odio culpa numquam dicta! Labore aliquid voluptatum dolores, quidem reiciendis obcaecati illum sint. Quasi quos repellat labore reiciendis odit, ut voluptatibus perferendis consectetur!</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-4">
    <div class="sowp-tabs-list__item-heading">Eveniet, necessitatibus, rerum?</div>
    <div class="sowp-tabs-list__item-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium rerum deleniti iste quae, provident quo quis, tempore magni, fugiat laborum consequuntur voluptatem ea laboriosam recusandae perspiciatis! Sunt asperiores quos earum!</p>
      <p>Quisquam dolorem, debitis eos ut sit accusantium molestiae veniam adipisci veritatis doloribus nulla laborum, exercitationem tenetur esse porro dolore iste inventore nihil ducimus numquam quas eius. Earum, delectus dolorem alias!</p>
      <p>Et sit blanditiis numquam tempora doloribus vitae, nulla, corrupti reprehenderit accusantium maiores. Cupiditate vel fugiat ullam nam autem voluptatibus iusto? Ut, deserunt, numquam! Debitis doloremque repellendus perspiciatis non libero quas?</p>
      <p>Voluptatibus expedita totam quod eius voluptates, numquam eum illum sit autem harum sunt molestiae quaerat velit blanditiis impedit eaque tempora aliquam quidem cupiditate quas debitis iure ipsa, facere corrupti dignissimos?</p>
      <p>Minima nulla beatae culpa accusamus est accusantium corporis reprehenderit nam doloribus id! Soluta tenetur cum id quisquam odio ad vel perferendis iusto itaque ut assumenda repellendus, ipsam cumque totam expedita!</p>
    </div>
  </div>
</div>




# Łączenie elementów

Elementy mogą być łączone, aby budować bardziej złożone elementy.

````html_example
<h1>Rzodkiewka pomarańczowa</h1>
<div class="sowp-cards-tabs">
  <div class="sowp-cards-tabs__item">
    <div class="sowp-card-tab sowp-card-tab--active">
      <div class="sowp-cards-tabs__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="sowp-cards-tabs__label">
        15 minuts
      </div>
    </div>
  </div>
  <div class="sowp-cards-tabs__item">
    <div class="sowp-card-tab">
      <div class="sowp-cards-tabs__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="sowp-cards-tabs__label">
        15 minuts
      </div>
    </div>
  </div>
  <div class="sowp-cards-tabs__item">
    <div class="sowp-card-tab">
      <div class="sowp-cards-tabs__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="sowp-cards-tabs__label">
        15 minuts
      </div>
    </div>
  </div>
  <div class="sowp-cards-tabs__item">
    <div class="sowp-card-tab">
      <div class="sowp-cards-tabs__icon">
        <i class="fa fa-bars"></i>
      </div>
      <div class="sowp-cards-tabs__label">
        15 minuts
      </div>
    </div>
  </div>
</div>
<div class="sowp-bg sowp-bg--brand">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore a, possimus eius in ex et nisi deserunt excepturi provident sed aliquam ea voluptatibus qui officia quam doloribus modi quis incidunt!</p>
</div>
<div class="sowp-tabs-list">
  <div class="sowp-tabs-list__item is-expanded" id="tab-1">
    <div class="sowp-tabs-list__item-heading">Lorem ipsum dolor.</div>
    <div class="sowp-tabs-list__item-body">
      <p>[...]</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-2">
    <div class="sowp-tabs-list__item-heading">Lorem ipsum dolor.</div>
    <div class="sowp-tabs-list__item-body">
      <p>[...]</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-3">
    <div class="sowp-tabs-list__item-heading">Ratione, officiis illo.</div>
    <div class="sowp-tabs-list__item-body">
      <p>[...]</p>
    </div>
  </div>
  <div class="sowp-tabs-list__item" id="tab-4">
    <div class="sowp-tabs-list__item-heading">Eveniet, necessitatibus, rerum?</div>
    <div class="sowp-tabs-list__item-body">
      <p>[...]</p>
    </div>
  </div>
</div>
.

````


# Variables




# Mixins

## clearfix
## fold
