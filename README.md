# CHERground POS 서비스 앱 
관리자가 상품 정보 및 카테고리를 추가하고, 상품을 장바구니에 담아 결제할 수 있는 Web POS 사이트 구현 프로젝트로, 회사 CHERGROUND에서 1개월 동안 인턴으로 일하면서 진행한 프로젝트다.

사이트의 기획과 디자인은 기업 협업을 진행한 CHERGROUND에서 Zeplin으로 제공해주셨으며, 클린 아키텍쳐를 준수하기 위해 MVVM 모델을 적용하였다.

> ## [Assignment] 기업정보

 <br/>

  - 기업명 : CHERground

  - [CHERground 웹사이트 링크](https://www.cherground.com/)

> ## Members

<br/>

|이름   |Github                   |담당 기능|
|-------|-------------------------|--------------------|
|👨🏻‍🎤 송영록 |[crescentfull](https://github.com/crescentfull) | DB data control, 로그인, 장바구니 API  |
|👰🏻‍♂️ 김도훈 |[cheesepuff90](https://github.com/cheesepuff90)     | DB data control, DB load test, 상품 API|

ㅤ👪 공동작업: DB Modeling

> ## 사용 기술
<br>

<div align="center">

 [![My Skills](https://skillicons.dev/icons?i=jts,express,nodejs,nginx,vscode,mysql,git,github)](https://skillicons.dev)

</div>

> ## 모델링

<br/>

<div align="center">

![POS_diagram](https://user-images.githubusercontent.com/78721108/146539375-5120ff07-245b-47df-8c09-39c026ce666f.png)

</div>

> ## 구현 기능

<br>
Clean Architecture를 프로젝트에 적용하기 위해 MVVM 디자인 패턴을 사용하였습니다. <br/>
entity - data(API) - repository - usecase - view model - view 로 계층을 분리하여, 데이터 통신이 이루어지는 코드와 뷰를 작동시키는 코드를 분리하였습니다. <br/>
Entity에 User, Product, Category 등 객체의 속성들을 interface로 만들어 정의해두고, Entity를 import 하여 Promise 객체의 반환 타입이나 함수 인자 타입을 지정해주었습니다. <br/>
계층마다 index.ts 파일에 class에서 사용할 함수와 타입들을 지정해둔 interface를 정의하고 각 class에 implement하여 사용함으로써, class를 일일히 보지 않고 index.ts 파일만 확인하면 어떤 함수들이 정의되어 있는지 알 수 있도록 하였습니다. <br/>

<br/>

📌 백엔드 설계 및 결제 API 개발 담당 <br/>

MySQL 기반 데이터 모델링 및 장바구니 API 개발 <br>
JWT 인증을 활용한 POS 시스템 로그인/회원 관리 기능 구현 <br>
EC2 + RDS 기반 AWS 서버 배포 진행 <br>


테스트 결과는 [Postman loadtest 문서 링크](https://cloudy-station-688596.postman.co/workspace/My-Workspace~e8ea5b0c-c034-4103-8b11-b76a8dd22f41/documentation/17713220-bd37e9f6-9a13-44e9-baaa-5c7b42ab267c)에서 확인 가능합니다.


> ## API Document & Test

1. [Postman API 문서 링크](https://documenter.getpostman.com/view/17713220/2s7ZE4LPuE)

<br/>

> ## 폴더 구조

<br>

```bash
.
├── api
│   ├── controller
│   │   ├── cartController.ts
│   │   ├── categoryController.ts
│   │   ├── imageController.ts
│   │   ├── keywordController.ts
│   │   ├── optionsController.ts
│   │   ├── productCategoryController.ts
│   │   ├── productController.ts
│   │   ├── statusController.ts
│   │   └── userController.ts
│   └── dto
│       └── index.ts
├── app.ts
├── data
│   ├── connection
│   │   └── connection.ts
│   ├── entity
│   │   ├── cart.ts
│   │   ├── category.ts
│   │   ├── image.ts
│   │   ├── keyword.ts
│   │   ├── options.ts
│   │   ├── product.ts
│   │   ├── productCategory.ts
│   │   ├── status.ts
│   │   └── user.ts
│   ├── mapper
│   │   ├── implement
│   │   │   ├── cartMapperImpl.ts
│   │   │   ├── categoryMapperImpl.ts
│   │   │   ├── imageMapperImpl.ts
│   │   │   ├── keywordMapperImpl.ts
│   │   │   ├── optionMapperImpl.ts
│   │   │   ├── productCategoryMapperImpl.ts
│   │   │   ├── productMapperImpl.ts
│   │   │   ├── statusMapperImpl.ts
│   │   │   └── userMapperImpl.ts
│   │   └── modelMapper.ts
│   └── repository
│       ├── implement
│       │   ├── ImageRepositoryImpl.ts
│       │   ├── cartRepositoryImpl.ts
│       │   ├── categoryRepositoryImpl.ts
│       │   ├── keywordRepositoryImpl.ts
│       │   ├── optionsRepositoryImpl.ts
│       │   ├── productCategoryRepositoryImpl.ts
│       │   ├── productRepositoryImpl.ts
│       │   ├── statusRepositoryImpl.ts
│       │   └── userRepositoryImpl.ts
│       └── index.ts
├── index.ts
├── injector.ts
├── middleware
│   └── index.ts
└── service
    ├── error
    │   └── error.ts
    ├── implement
    │   ├── cartServiceImpl.ts
    │   ├── categoryServiceImpl.ts
    │   ├── imageServiceImpl.ts
    │   ├── keywordServiceImpl.ts
    │   ├── optionsServiceImpl.ts
    │   ├── productCategoryServiceImpl.ts
    │   ├── productServiceImpl.ts
    │   ├── statusServiceImpl.ts
    │   └── userServiceImpl.ts
    └── index.ts
```

# Reference
이 프로젝트는 CHERground 기업협업의 일환으로 제작된 코드입니다. 
    
