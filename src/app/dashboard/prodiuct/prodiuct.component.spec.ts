import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdiuctComponent } from './prodiuct.component';

describe('ProdiuctComponent', () => {
  let component: ProdiuctComponent;
  let fixture: ComponentFixture<ProdiuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdiuctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdiuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
