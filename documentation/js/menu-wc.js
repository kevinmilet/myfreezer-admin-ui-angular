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
                    <a href="index.html" data-type="index-link">myfreezer-admin-ui-angular documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                            'data-target="#components-links-module-AppModule-c97732be8145230b502f1ae44ed62b7a9f3501f101cc508d06ba151a26d574c33864c1dd70f00809e18bc20ace875be8a2ef446868e26747494fcbb906cc5b9d"' : 'data-target="#xs-components-links-module-AppModule-c97732be8145230b502f1ae44ed62b7a9f3501f101cc508d06ba151a26d574c33864c1dd70f00809e18bc20ace875be8a2ef446868e26747494fcbb906cc5b9d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c97732be8145230b502f1ae44ed62b7a9f3501f101cc508d06ba151a26d574c33864c1dd70f00809e18bc20ace875be8a2ef446868e26747494fcbb906cc5b9d"' :
                                            'id="xs-components-links-module-AppModule-c97732be8145230b502f1ae44ed62b7a9f3501f101cc508d06ba151a26d574c33864c1dd70f00809e18bc20ace875be8a2ef446868e26747494fcbb906cc5b9d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-82773634e316449b4d167fc501de083f0f03936de574dcd42ca6816da1a82ecc9ae9b543e9ef200f7277a880887db354d6b3de6ef1952796ad521acc7c6a1e2e"' : 'data-target="#xs-components-links-module-AuthModule-82773634e316449b4d167fc501de083f0f03936de574dcd42ca6816da1a82ecc9ae9b543e9ef200f7277a880887db354d6b3de6ef1952796ad521acc7c6a1e2e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-82773634e316449b4d167fc501de083f0f03936de574dcd42ca6816da1a82ecc9ae9b543e9ef200f7277a880887db354d6b3de6ef1952796ad521acc7c6a1e2e"' :
                                            'id="xs-components-links-module-AuthModule-82773634e316449b4d167fc501de083f0f03936de574dcd42ca6816da1a82ecc9ae9b543e9ef200f7277a880887db354d6b3de6ef1952796ad521acc7c6a1e2e"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-bd773e324318b925babde8c57c22fb1daee6047d30ab67c9a4c0a6f602ddc52c090c168a5c66203dbd8b08cb912642b0e5f393e4f7fa61281c4d6d1f4e2e4385"' : 'data-target="#xs-components-links-module-DashboardModule-bd773e324318b925babde8c57c22fb1daee6047d30ab67c9a4c0a6f602ddc52c090c168a5c66203dbd8b08cb912642b0e5f393e4f7fa61281c4d6d1f4e2e4385"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-bd773e324318b925babde8c57c22fb1daee6047d30ab67c9a4c0a6f602ddc52c090c168a5c66203dbd8b08cb912642b0e5f393e4f7fa61281c4d6d1f4e2e4385"' :
                                            'id="xs-components-links-module-DashboardModule-bd773e324318b925babde8c57c22fb1daee6047d30ab67c9a4c0a6f602ddc52c090c168a5c66203dbd8b08cb912642b0e5f393e4f7fa61281c4d6d1f4e2e4385"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FreezerModule.html" data-type="entity-link" >FreezerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FreezerModule-ff4422aee04ac1e0f01a80097aafd07ceff33e8ee525df929dd755d3e955819a088eeb49670a61da077a453a7cd39ded990e4f4decff863ba6c3f1fda7050a93"' : 'data-target="#xs-components-links-module-FreezerModule-ff4422aee04ac1e0f01a80097aafd07ceff33e8ee525df929dd755d3e955819a088eeb49670a61da077a453a7cd39ded990e4f4decff863ba6c3f1fda7050a93"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FreezerModule-ff4422aee04ac1e0f01a80097aafd07ceff33e8ee525df929dd755d3e955819a088eeb49670a61da077a453a7cd39ded990e4f4decff863ba6c3f1fda7050a93"' :
                                            'id="xs-components-links-module-FreezerModule-ff4422aee04ac1e0f01a80097aafd07ceff33e8ee525df929dd755d3e955819a088eeb49670a61da077a453a7cd39ded990e4f4decff863ba6c3f1fda7050a93"' }>
                                            <li class="link">
                                                <a href="components/FreezerIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FreezerIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FreezerRoutingModule.html" data-type="entity-link" >FreezerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FreezerTypeModule.html" data-type="entity-link" >FreezerTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FreezerTypeModule-b8a097711445c01d8daa4504bead6804db41f8534615e7840604dd026376fac8c1cab02621b3bad9062c2a94a8ae9e846dcd20e0613f8bfb2cc00801526e1327"' : 'data-target="#xs-components-links-module-FreezerTypeModule-b8a097711445c01d8daa4504bead6804db41f8534615e7840604dd026376fac8c1cab02621b3bad9062c2a94a8ae9e846dcd20e0613f8bfb2cc00801526e1327"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FreezerTypeModule-b8a097711445c01d8daa4504bead6804db41f8534615e7840604dd026376fac8c1cab02621b3bad9062c2a94a8ae9e846dcd20e0613f8bfb2cc00801526e1327"' :
                                            'id="xs-components-links-module-FreezerTypeModule-b8a097711445c01d8daa4504bead6804db41f8534615e7840604dd026376fac8c1cab02621b3bad9062c2a94a8ae9e846dcd20e0613f8bfb2cc00801526e1327"' }>
                                            <li class="link">
                                                <a href="components/FreezertypeIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FreezertypeIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FreezerTypeRoutingModule.html" data-type="entity-link" >FreezerTypeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductModule-2ebb2b06c7ded00056879bb625c94a9e5f9c62570fc98086ae93ef33da65f28105ce9095fe32cefd572bc01bce095587541259b65043cf50eb184a2f2eb86c07"' : 'data-target="#xs-components-links-module-ProductModule-2ebb2b06c7ded00056879bb625c94a9e5f9c62570fc98086ae93ef33da65f28105ce9095fe32cefd572bc01bce095587541259b65043cf50eb184a2f2eb86c07"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-2ebb2b06c7ded00056879bb625c94a9e5f9c62570fc98086ae93ef33da65f28105ce9095fe32cefd572bc01bce095587541259b65043cf50eb184a2f2eb86c07"' :
                                            'id="xs-components-links-module-ProductModule-2ebb2b06c7ded00056879bb625c94a9e5f9c62570fc98086ae93ef33da65f28105ce9095fe32cefd572bc01bce095587541259b65043cf50eb184a2f2eb86c07"' }>
                                            <li class="link">
                                                <a href="components/ProductIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductTypeModule.html" data-type="entity-link" >ProductTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductTypeModule-cde473c3d8076ff07b9ce7505bf67d5fdd978cd1bf765dc619e7adbaba8deeb03e5a3c3488682aee6bca5a3b78657ad25892e735d1c29ecc9fa290c174d00af6"' : 'data-target="#xs-components-links-module-ProductTypeModule-cde473c3d8076ff07b9ce7505bf67d5fdd978cd1bf765dc619e7adbaba8deeb03e5a3c3488682aee6bca5a3b78657ad25892e735d1c29ecc9fa290c174d00af6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductTypeModule-cde473c3d8076ff07b9ce7505bf67d5fdd978cd1bf765dc619e7adbaba8deeb03e5a3c3488682aee6bca5a3b78657ad25892e735d1c29ecc9fa290c174d00af6"' :
                                            'id="xs-components-links-module-ProductTypeModule-cde473c3d8076ff07b9ce7505bf67d5fdd978cd1bf765dc619e7adbaba8deeb03e5a3c3488682aee6bca5a3b78657ad25892e735d1c29ecc9fa290c174d00af6"' }>
                                            <li class="link">
                                                <a href="components/ProducttypeIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProducttypeIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductTypeRoutingModule.html" data-type="entity-link" >ProductTypeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-fda02cac329bc37bdc4d9b67977aaa3185bdf74f2c79de8b004cf80cdbb0e039a6df4548ef4e02304576404955076e26f68edd0c5870c1ae06134aacbe8965cd"' : 'data-target="#xs-components-links-module-UserModule-fda02cac329bc37bdc4d9b67977aaa3185bdf74f2c79de8b004cf80cdbb0e039a6df4548ef4e02304576404955076e26f68edd0c5870c1ae06134aacbe8965cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-fda02cac329bc37bdc4d9b67977aaa3185bdf74f2c79de8b004cf80cdbb0e039a6df4548ef4e02304576404955076e26f68edd0c5870c1ae06134aacbe8965cd"' :
                                            'id="xs-components-links-module-UserModule-fda02cac329bc37bdc4d9b67977aaa3185bdf74f2c79de8b004cf80cdbb0e039a6df4548ef4e02304576404955076e26f68edd0c5870c1ae06134aacbe8965cd"' }>
                                            <li class="link">
                                                <a href="components/UserIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AlertComponent.html" data-type="entity-link" >AlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
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
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
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
                                <a href="interfaces/ICredential.html" data-type="entity-link" >ICredential</a>
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