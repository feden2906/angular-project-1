// 1 встановлюємо aнгулар, відкриваємо проект, і в терміналі запускаєм: ng s --o;
// 2 @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// }) где @Component - называется декоратор.
//     селектор означает как вызов компонета характерезуется (як можна викликати компонент)
//      templateUrl: - це html. якщо не має окр.файла html, видаляємо Url і template: пишемо прямо розмітку
//      styleUrls: - це css - забираємо Url і в styles: пишем стилі
// 3 якщо добавляємо папку с компонентами, то алт+инстерт створюємо Angular Schematic щоб створились всі файли автоматично -
//   вибираємо create an Angular component или тоже сделать через командну строку в консольке
// 4 обов"язково перевірити чи в модуль компонент тс підключена компонента інакше помилка
// 5 щоб зробити запит в ангуляр є вбудований спец модуль треба HttpClientModule- прописуємв   - imports: [BrowserModul, HttpClientModule ],
// 6 щоб створити запит правильно створюємо сервис, переходимо в  Schematic і називаємо
// 7 переходим в ап модуль і задекларуєм юзер-сервіс
// 8 в юзер-сервіс в конструкторі прописуємо HttpClientModule
// 9 юзер сервіс впроваджуємо метод get і добавляємо посилання.
// 10 створюємо моделс і файл тс де прописуємо інтерфейс
// 11 в юзерс html ітеруємо вивід через *ngFor

// ______
// оптимізуєм юзер компонент
// 12 в папці компонент створюємо Angular Schematic юзер, і створилась нова компонента з реєстрацією в апп модуль
// 13 сегмент з юзерс-ком-нт.html переносимо в юзер-ком-нт.html без ітерації
//    і в файл кзер-ком-нт.ts в експорті вказуємо що юзер відноситься до user: User;
//       щоб не валила помилка з гугл шукаємо по angular property has no initializer і на сайті https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
//       знаходимо ("strictPropertyInitialization": false)  копіюємо і в становлюємо в tsconfig.json в розділ "compilerOptions":
// 14 а в аппюзерс-ком-нт html викликаємо апп.юзер та ітеруємо
//      і тепер найскладніше як передати ітерацію (тимчасовий об"єкт юзер) в експорт юзер-ком-нт.ts
// 15 в експорт юзер-ком-нт.ts прописуємо спец декоратор: @Input()
// ____________________________________________

//        Маршрутизація
// 1 В app.com-nt.html витираєм все та прописываем юл с ліжками на сторінки
// 2 В app.module.ts додаємо в imports модуль RouterModule, який підключає можливість аршрутизації (як в реакті підключаємо браузер роутер, роутер, світч)
//   має бути визначений статичний метод fooRoot() для кореневого модуля і в середину передати масив шляхів - параметр - path- визначає на яку урлу хочемо перейти, і компонент який має там відобразитись.

//   як він буде відображатись:
// 3 щоб перейти на посилання, ліжку юзерс обгортаємо в router-link - є два способа: краще другий через [].
//
// 4 обробник (routeModule з app.module.ts має відобразитись в роутер-аутлеті в апп.компонент.html
//   вивести деталі на кожного юзера
// 5 в user.com-nt.htm добавляємо кнопку і івент 'click' який буде викликати функцію
// 6 створюємо на юзер.комп-нт метод доТуДетаилз (через консоль перевіряємо) і з цього методу потрібно перейти на сторінку /users/:id
// 7 йдемо на апп.модуль і прописуємо що у комп-ту юзерз будуть чілдрени які є окремими шляхами: {path:':id', component: UserDetailsComponent
//    та створюємо UserDetailsComponent через шематік
// 8 так як UserDetailsComponent має відображатися в батьківському ком-нті, переходим на юзерз.ком-нт.html і впроваджуємо роут-аутлет
// 9 йдемо в юзер.ком-нт  та визначаємо в конструкторі об"єкт Router - (це депенденсіс інджекшн)
//      та в goToDetails звертаємось до this.router методу navigate який приймає команди
//      добавляємо олб"єкт extas (заходить другим аргументом і в ньому вибираємом параметр relativeTo і цей параметр впроваджуємо в конструктор як тип ActivatedRoute (зчитує history)
//      і вказуємо в relativeTo this.activatedRoute цим ми кажемо що маємо відношення шляху від поточного місця розташування і в
// 10 щоб хтось обслуговував маршрут
//    йдемо в app.module активуэмо чілдрен
// 11 щоб наповнити детайлз данними:
//     простий варіант - додати в goToDetails() state: this.user а щоб відхопити його йдемо на юзер-детайлз.ком-нт.тс і визначаємо об"єкт private router: Router
//        щоб перевірити в консоль або в ngOnInit - console.log(history.state), або в конструкторі console.log(this.router.getCurrentNavigation()?.extras.state) краще другий
// 12  щоб відбувався рірендеринг (змінювалась інфо по юзерам)
//      в юзер-дітейл визначаєм що юзер будет типом юзер та впроваджуємо this.user в конструктор
//      буде помилка в this.user - щоб привести до типу юзера харКаст - as User
// 13  перейдем юзер-детайлз.html і вкажем що виводим email
// 14 але щоб відбувся рірендеринг треба підписатися на зміни:
//    в файлі юзер-детайлз.тс в конструкторі впровадимо private activatedRoute: ActivatedRoute який знає про поточне місцерозташування і ми можемо отримати парамз та підписатися на них
//    виведемо парамз
// 15 покладемо this.user = this.router.getCurrentNavigation()?.extras.state as User
//     console.log(this.user); в this.activateRoute.params.subscribe - змінюється айді і ініціалізується окремий юзер
// _____________________________
//        створимо пост
// 16 в апп.модуль.html створюємо лінку
// 17 в апп.модуль.тс створюэмо шлях - path
// 18 свторимо постс.компонетнт через шематик
// 19 є лінк але треба отримати пост - створюємо сервіс
//    в конструкторі httpClient: HttpClient
//    -урлу
//    -метод getUsers
// 20 створюємо модельку Post який експортує інтерфейс Post
// 21 імпортуємо Post в постс.сервис
// 22 створюємо метод getPost() по ID
// 23 на постс.компонент.тс впроваджуємо сервіс - тільки треба було створити пост а не постс.сервис
// 24 на  ngOnInit звернемося до нього (отримати всі пости і підписатися), отримати велью і впровадити його в posts: Post[]
// 25 проітеруємо все на шаблоні постс.html
// 26 створимо компоненту пост
// 27 створимо в пост.компонент.тс пропертю @Input post: з типом Post
// 28 в пост.ком-нт.html створимо об"єкт що виводимо та кнопку
//    __________ підхід щоб заміняти інфо на сторінці окремій
// 29 щоб замінити інфо треба підміняти урлу. йдемо на аап.модуль і створюємо нову урлу постДетайлз щоб в батьківському компоненті (апп) відкивався.
//    створимо компонет пост.детайлз
// 30 або - переходимо на пост-детайлиз і в конструктор впровадимо private activatedRoute: ActivatedRoute
// 31 this.activatedRoute.params підпишемось на нього, та вкажимо що коли параментри змінюються зчитуємо значення ідентифікатора і за допомогоюу цих параметрів з private postDervice : PostsService
//    за допомогою метода getPost зчитати конкретний пост
//    після того як зчитали створимо в ексорті пост об"ет типу пост
// 32 перейдемо на пост.детейлз.html і відобразим пост-детейлз
// _________________________
// 33 canDeactivate - щоб деактивовувати ту чи іншу урлу
//    в апп.модуль в об"єкті path,викликаємо canDeactivate - прошарок який каже що перж ніж щось деактивувати я повинен виконати сегмент (дективатор)
// 34 створимо сервис деактиватор - в експорті імплементуємо інтерфейс CanDeactivate<any> з типом буліан
// 35 натискаемо альт+ентер і імплементуємо і повертаємо return confirm('leave out')
// 36 передаємо [DeactivatorService] в path в апп.модуль
// ____________ canActivate
// 37 в деактиватор/активатор.сервис вносимо метод canActivate в експорті імплементуємо інтерфейс
// 38 в апп.модуль внести в path - canActivate: [DeactivatorService]


