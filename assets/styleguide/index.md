# Jak używać?


## JavaScript

## CSS
## SCSS

## Bower
Problem z masonry

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
    <div class="sowp-card sowp-card--light">[...]</div>
    <div class="sowp-card sowp-card--light">[...]</div>
    <div class="sowp-card sowp-card--light">[...]</div>
    <div class="sowp-card sowp-card--light">[...]</div>
    <div class="sowp-card sowp-card--light">[...]</div>
    <div class="sowp-card sowp-card--light">[...]</div>
    <div class="sowp-card sowp-card--light">[...]</div>
  </div>
</div>
````
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
  </div>
</div>


# Navbar




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


# Variables




# Mixins

## clearfix
## fold
