![header](https://capsule-render.vercel.app/api?type=Slice&color=auto&height=350&section=header&text=%20%20CHERground&fontSize=90&textBg=true)

<br/>
<br/>


# CHERground x  Wanted POS 서비스 앱 

<br/>

> ## [Assignment] 기업정보

 <br/>

  - 기업명 : CHERground

  - [CHERground 웹사이트 링크](https://www.cherground.com/)

<br/>
<br/>
<br/>

> ## Members

<br/>

|이름   |Github                   |담당 기능|
|-------|-------------------------|--------------------|
|👨🏻‍🎤 송영록 |[kjhabc2002](https://github.com/kjhabc2002) | DB data control, DB load test, AWS / Docker 배포 |
|👰🏻‍♂️ 김도훈 |[thisisempty](https://github.com/thisisempty)     | DB data control, DB load test, AWS / Docker 배포 |

ㅤ👪 공동작업: DB Modeling

<br>
<br>
<br>


> ## 사용 기술
<br>

<div align="center">

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)ㅤ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

</div>

<br>
<br>
<br>

> ## 과제 내용

<br>

ㅤ아래 요구사항에 맞춰 POS앱 Restfull API를 개발합니다.

<br>




<br/>
<br/>
<br/>

> ## 모델링

<br/>

<div align="center">

![POS_diagram](https://user-images.githubusercontent.com/78721108/146539375-5120ff07-245b-47df-8c09-39c026ce666f.png)

</div>

<br/>
<br/>
<br>


> ## 구현 기능

<br>




<br>
<br>
<br>


테스트 결과는 [Postman loadtest 문서 링크](https://cloudy-station-688596.postman.co/workspace/My-Workspace~e8ea5b0c-c034-4103-8b11-b76a8dd22f41/documentation/17713220-bd37e9f6-9a13-44e9-baaa-5c7b42ab267c)에서 확인 가능합니다.


> ## API Document & Test

<br>

1. [Postman API 문서 링크](https://cloudy-station-688596.postman.co/workspace/My-Workspace~e8ea5b0c-c034-4103-8b11-b76a8dd22f41/documentation/17713220-bd37e9f6-9a13-44e9-baaa-5c7b42ab267c)
<br/>
<br>
<br>

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

<br/>
<br/>
<br/>

# Reference
이 프로젝트는 CHERground 기업협업의 일환으로 제작된 코드입니다. 
    
