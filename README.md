# CHERground POS 서비스 앱 
관리자가 상품 정보 및 카테고리를 추가하고, 상품을 장바구니에 담아 결제할 수 있는 Web POS 사이트 구현 프로젝트로, 회사 CHERGROUND에서 1개월 동안 인턴으로 일하면서 진행한 프로젝트입니다.

사이트의 기획과 디자인은 기업 협업을 진행한 CHERGROUND에서 Zeplin으로 제공해주셨으며, 클린 아키텍쳐를 준수하기 위해 MVVM 모델을 적용하였습니다.

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
<br/>

<div align="center">

 [![My Skills](https://skillicons.dev/icons?i=jts,express,nodejs,nginx,vscode,mysql,git,github)](https://skillicons.dev)

</div>

> ## 모델링

<br/>

<div align="center">

![POS_diagram](https://user-images.githubusercontent.com/78721108/146539375-5120ff07-245b-47df-8c09-39c026ce666f.png)

</div>

> ## 구현 기능

<br/>
📌 웹 기반 POS 시스템 백엔드 개발 (장바구니 API 및 로그인 기능 구현 담당)

<br/>

- Clean Architecture 원칙 준수

  1. 의존성 역전 원칙 (Dependency Inversion Principle) 적용
  - Repository 패턴을 사용하여 비즈니스 로직(Service)과 데이터 접근 계층(Repository)을 분리
  -  cartService.ts에서 CartRepositoryImpl.ts를 직접 호출하지 않고 의존성 주입(Inversify 사용)

  2. Entity (Domain Model)과 Data 분리
  - data/entity/에서 User.ts, Cart.ts, Product.ts 등을 도메인 모델(Entity)로 정의
  - data/repository/implement/에서 Repository 구현체가 TypeORM을 활용해 데이터 접근을 담당
  - 비즈니스 로직(service/)과 데이터 접근(repository/)을 분리하여 유지보수성을 높임

  3. DTO를 사용하여 데이터 전송을 분리 (Interface Adapters)
  - api/dto/에서 DTO(Data Transfer Object) 정의
  - 컨트롤러 → DTO 변환 → 서비스 호출 순으로 데이터가 흐르도록 설계됨

  4. Express 컨트롤러는 단순히 Use Case(Service)를 호출
  - api/controller/cartController.ts에서 비즈니스 로직을 직접 처리하지 않고, cartService.ts에 위임
- Express 라우팅과 비즈니스 로직(Service) 분리



* Express 기반 장바구니 API 구현 및 JWT 인증 적용<br/>
  - auth 미들웨어를 활용하여 인증된 사용자만 장바구니 API 접근 가능하도록 설정<br/>
  - TypeORM을 활용한 장바구니 데이터 조회 (getUserCartDetail(id, userId)) <br/>
  - 사용자 userId를 기반으로 상품 및 이미지 데이터를 조인하여 반환<br/>
* 사용자 로그인 API 개발 (userRepositoryImpl.ts)<br/>
  - Bcrypt를 활용한 비밀번호 해싱 및 검증 (bcrypt.compare)<br/>
  - JWT 토큰을 활용한 사용자 인증 및 세션 관리<br/>
* Node.js + Express 기반 RESTful API 개발 및 데이터 관리<br/>
* AWS EC2 + RDS를 활용한 서비스 배포

<br/>
<br/>


테스트 결과는 [Postman loadtest 문서 링크](https://cloudy-station-688596.postman.co/workspace/My-Workspace~e8ea5b0c-c034-4103-8b11-b76a8dd22f41/documentation/17713220-bd37e9f6-9a13-44e9-baaa-5c7b42ab267c)에서 확인 가능합니다.


> ## API Document & Test

1. [Postman API 문서 링크](https://documenter.getpostman.com/view/17713220/2s7ZE4LPuE)

<br/>

> ## 폴더 구조

<br/>

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

> ## Reference
이 프로젝트는 CHERground 기업협업의 일환으로 제작된 코드입니다. 
