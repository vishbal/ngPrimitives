import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPrimitivesScadeaComponent } from './ng-primitives-scadea.component';

describe('NgPrimitivesScadeaComponent', () => {
  let component: NgPrimitivesScadeaComponent;
  let fixture: ComponentFixture<NgPrimitivesScadeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPrimitivesScadeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgPrimitivesScadeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
