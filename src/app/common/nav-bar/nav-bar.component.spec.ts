import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let router: Router;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    debugElement = fixture.debugElement;
  });

  it('should create NavBarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home when onNavigateToHome is called', () => {
    spyOn(router, 'navigate');
    component.onNavigateToHome();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should navigate to product-management when onNavigateToProductManagement is called', () => {
    spyOn(router, 'navigate');
    component.onNavigateToProductManagement();
    expect(router.navigate).toHaveBeenCalledWith(['product-management']);
  });

  // it('should have a link to home', () => {
  //   const homeLink = debugElement.query(By.css('[routerLink="home"]'));
  //   expect(homeLink).toBeTruthy();
  // });

  // it('should have a link to product-management', () => {
  //   const productManagementLink = debugElement.query(
  //     By.css('[routerLink="product-management"]')
  //   );
  //   expect(productManagementLink).toBeTruthy();
  // });
});
