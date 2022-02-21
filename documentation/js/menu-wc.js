'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">eat-low documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-773989c8dfbf25c5de8f022be26e05fb70ef0c09f6a358d40df0f5b12bfa858f93781625f79af894e239146319fc7aa333eac0546adcec1c8c03435ea3ca637d"' : 'data-target="#xs-components-links-module-AppModule-773989c8dfbf25c5de8f022be26e05fb70ef0c09f6a358d40df0f5b12bfa858f93781625f79af894e239146319fc7aa333eac0546adcec1c8c03435ea3ca637d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-773989c8dfbf25c5de8f022be26e05fb70ef0c09f6a358d40df0f5b12bfa858f93781625f79af894e239146319fc7aa333eac0546adcec1c8c03435ea3ca637d"' :
                                            'id="xs-components-links-module-AppModule-773989c8dfbf25c5de8f022be26e05fb70ef0c09f6a358d40df0f5b12bfa858f93781625f79af894e239146319fc7aa333eac0546adcec1c8c03435ea3ca637d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-d6a86b62b8b6e4e0bb409932936ec95cec77c64660c41bb1b698e252449154a203ab8acfc9c32219dda9e5c4e9abb8675f5ef11e318460b05f1e3771c1f20e88"' : 'data-target="#xs-components-links-module-LoginModule-d6a86b62b8b6e4e0bb409932936ec95cec77c64660c41bb1b698e252449154a203ab8acfc9c32219dda9e5c4e9abb8675f5ef11e318460b05f1e3771c1f20e88"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-d6a86b62b8b6e4e0bb409932936ec95cec77c64660c41bb1b698e252449154a203ab8acfc9c32219dda9e5c4e9abb8675f5ef11e318460b05f1e3771c1f20e88"' :
                                            'id="xs-components-links-module-LoginModule-d6a86b62b8b6e4e0bb409932936ec95cec77c64660c41bb1b698e252449154a203ab8acfc9c32219dda9e5c4e9abb8675f5ef11e318460b05f1e3771c1f20e88"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageExempleModule.html" data-type="entity-link" >PageExempleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageExempleModule-442687ff6bed8916d0ee4f9f5a0dc0995e1bf58379adb06a9fddef5816e4257692af604894246e89ef5f31d921cff64868a4bfb2da1c32f964c5c5c412efcd6c"' : 'data-target="#xs-components-links-module-PageExempleModule-442687ff6bed8916d0ee4f9f5a0dc0995e1bf58379adb06a9fddef5816e4257692af604894246e89ef5f31d921cff64868a4bfb2da1c32f964c5c5c412efcd6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageExempleModule-442687ff6bed8916d0ee4f9f5a0dc0995e1bf58379adb06a9fddef5816e4257692af604894246e89ef5f31d921cff64868a4bfb2da1c32f964c5c5c412efcd6c"' :
                                            'id="xs-components-links-module-PageExempleModule-442687ff6bed8916d0ee4f9f5a0dc0995e1bf58379adb06a9fddef5816e4257692af604894246e89ef5f31d921cff64868a4bfb2da1c32f964c5c5c412efcd6c"' }>
                                            <li class="link">
                                                <a href="components/PageExempleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageExempleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageExempleRoutingModule.html" data-type="entity-link" >PageExempleRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link" >RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-6dd84e2fbde6b30c49fa8a94e4fd732a6b7797e5d49c1aa198b09661f0f07bf82e48ce415120bff356d96df3a65e16c16112855d5bdcf682c70f0e57512ef9aa"' : 'data-target="#xs-components-links-module-RegisterModule-6dd84e2fbde6b30c49fa8a94e4fd732a6b7797e5d49c1aa198b09661f0f07bf82e48ce415120bff356d96df3a65e16c16112855d5bdcf682c70f0e57512ef9aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-6dd84e2fbde6b30c49fa8a94e4fd732a6b7797e5d49c1aa198b09661f0f07bf82e48ce415120bff356d96df3a65e16c16112855d5bdcf682c70f0e57512ef9aa"' :
                                            'id="xs-components-links-module-RegisterModule-6dd84e2fbde6b30c49fa8a94e4fd732a6b7797e5d49c1aa198b09661f0f07bf82e48ce415120bff356d96df3a65e16c16112855d5bdcf682c70f0e57512ef9aa"' }>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterRoutingModule.html" data-type="entity-link" >RegisterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedComponentsModule.html" data-type="entity-link" >SharedComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedComponentsModule-0ff10f34cafb0ff811ba62de680dfd8d22895cf301e4b229c5e4167f70a50de649966ad0ea287aed43de52b87e4343eea30ff201a20fabfdacaf22098c65d5db"' : 'data-target="#xs-components-links-module-SharedComponentsModule-0ff10f34cafb0ff811ba62de680dfd8d22895cf301e4b229c5e4167f70a50de649966ad0ea287aed43de52b87e4343eea30ff201a20fabfdacaf22098c65d5db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedComponentsModule-0ff10f34cafb0ff811ba62de680dfd8d22895cf301e4b229c5e4167f70a50de649966ad0ea287aed43de52b87e4343eea30ff201a20fabfdacaf22098c65d5db"' :
                                            'id="xs-components-links-module-SharedComponentsModule-0ff10f34cafb0ff811ba62de680dfd8d22895cf301e4b229c5e4167f70a50de649966ad0ea287aed43de52b87e4343eea30ff201a20fabfdacaf22098c65d5db"' }>
                                            <li class="link">
                                                <a href="components/ConnectionButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConnectionButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubTitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubTitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TitleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/EnergyCost.html" data-type="entity-link" >EnergyCost</a>
                            </li>
                            <li class="link">
                                <a href="classes/Group.html" data-type="entity-link" >Group</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ingredients.html" data-type="entity-link" >Ingredients</a>
                            </li>
                            <li class="link">
                                <a href="classes/Meal.html" data-type="entity-link" >Meal</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubGroup.html" data-type="entity-link" >SubGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IEnergyCost.html" data-type="entity-link" >IEnergyCost</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGroup.html" data-type="entity-link" >IGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIngrdient.html" data-type="entity-link" >IIngrdient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMeal.html" data-type="entity-link" >IMeal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISubGroup.html" data-type="entity-link" >ISubGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});