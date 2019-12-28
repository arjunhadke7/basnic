import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagicballPage } from './magicball.page';

describe('MagicballPage', () => {
  let component: MagicballPage;
  let fixture: ComponentFixture<MagicballPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicballPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagicballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
