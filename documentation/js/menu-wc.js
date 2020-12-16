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
                    <a href="index.html" data-type="index-link">deliverymuch-pokedex documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4bcbed26b81ef0b2962817657100c59e"' : 'data-target="#xs-components-links-module-AppModule-4bcbed26b81ef0b2962817657100c59e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4bcbed26b81ef0b2962817657100c59e"' :
                                            'id="xs-components-links-module-AppModule-4bcbed26b81ef0b2962817657100c59e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-c77bdc90a242597c4d24188283628544"' : 'data-target="#xs-components-links-module-ComponentsModule-c77bdc90a242597c4d24188283628544"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-c77bdc90a242597c4d24188283628544"' :
                                            'id="xs-components-links-module-ComponentsModule-c77bdc90a242597c4d24188283628544"' }>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PokecontainerModule.html" data-type="entity-link">PokecontainerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PokecontainerModule-f67d4b79d8a656d7bee37f408f5d3fdf"' : 'data-target="#xs-components-links-module-PokecontainerModule-f67d4b79d8a656d7bee37f408f5d3fdf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PokecontainerModule-f67d4b79d8a656d7bee37f408f5d3fdf"' :
                                            'id="xs-components-links-module-PokecontainerModule-f67d4b79d8a656d7bee37f408f5d3fdf"' }>
                                            <li class="link">
                                                <a href="components/PokecontainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PokecontainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PokemapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PokemapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link">ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-718b8fe3d994d8a10d0de7ab40ce7ebe"' : 'data-target="#xs-injectables-links-module-ServicesModule-718b8fe3d994d8a10d0de7ab40ce7ebe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-718b8fe3d994d8a10d0de7ab40ce7ebe"' :
                                        'id="xs-injectables-links-module-ServicesModule-718b8fe3d994d8a10d0de7ab40ce7ebe"' }>
                                        <li class="link">
                                            <a href="injectables/PokeAPIService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PokeAPIService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TemplateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TemplateService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                    <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PokeAPIService.html" data-type="entity-link">PokeAPIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemplateService.html" data-type="entity-link">TemplateService</a>
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
                                <a href="interfaces/GenerationAbility.html" data-type="entity-link">GenerationAbility</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenerationInfo.html" data-type="entity-link">GenerationInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenerationLanguage.html" data-type="entity-link">GenerationLanguage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenerationMainRegion.html" data-type="entity-link">GenerationMainRegion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenerationMove.html" data-type="entity-link">GenerationMove</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenerationName.html" data-type="entity-link">GenerationName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenerationVersionGroup.html" data-type="entity-link">GenerationVersionGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonGeneration.html" data-type="entity-link">PokemonGeneration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonGenerationMenuItem.html" data-type="entity-link">PokemonGenerationMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonGenerationRef.html" data-type="entity-link">PokemonGenerationRef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonGenerationsResponse.html" data-type="entity-link">PokemonGenerationsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonSpecies.html" data-type="entity-link">PokemonSpecies</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonType.html" data-type="entity-link">PokemonType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThemeColors.html" data-type="entity-link">ThemeColors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThemeElement.html" data-type="entity-link">ThemeElement</a>
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