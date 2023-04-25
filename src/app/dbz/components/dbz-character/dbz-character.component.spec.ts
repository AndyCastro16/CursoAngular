import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzCharacterComponent } from './dbz-character.component';

describe('DbzCharacterComponent', () => {
  let component: DbzCharacterComponent;
  let fixture: ComponentFixture<DbzCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbzCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbzCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
