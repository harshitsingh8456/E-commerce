import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyodersPageComponent } from './myoders-page.component';

describe('MyodersPageComponent', () => {
  let component: MyodersPageComponent;
  let fixture: ComponentFixture<MyodersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyodersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyodersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
