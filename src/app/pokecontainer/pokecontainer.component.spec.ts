import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecontainerComponent } from './pokecontainer.component';

describe('PokecontainerComponent', () => {
  let component: PokecontainerComponent;
  let fixture: ComponentFixture<PokecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokecontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
