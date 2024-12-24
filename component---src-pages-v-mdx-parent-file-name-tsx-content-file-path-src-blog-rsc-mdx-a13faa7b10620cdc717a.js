"use strict";(self.webpackChunkpyjun01_blog=self.webpackChunkpyjun01_blog||[]).push([[101],{2837:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var l=t(6540),r=t(8453);function c(e){const n=Object.assign({blockquote:"blockquote",p:"p",h1:"h1",ul:"ul",li:"li",h2:"h2",a:"a",ol:"ol",code:"code",pre:"pre",h3:"h3"},(0,r.RP)(),e.components),{TableOfContents:t,CodeSandbox:c}=n;return c||o("CodeSandbox",!0),t||o("TableOfContents",!0),l.createElement(l.Fragment,null,l.createElement(t),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"해당 글은 Next.js Server Component(app router, dynamic rendering)를 사용한다는 전제로 작성되어 있습니다. RSC의 동작과 구현은 프레임워크, 렌더링 방식 별로 다를 수 있습니다."),"\n"),"\n",l.createElement(n.p,null,"React Server Component가 Next.js를 통해 릴리즈된 지 어느덧 꽤 시간이 지났다. stable 릴리즈 이후에 RSC를 다룬 국내 아티클이 나온게 별로 안보여서 이모저모 써보려 한다."),"\n",l.createElement(n.h1,null,"RSC를 지탱하는 기술들"),"\n",l.createElement(n.p,null,"React Server Component에 대해 알아보기 전에 RSC를 지탱해 주는 여러 가지 기술들이 있다. 그 기술들을 먼저 간략하게 알아보자."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Server-side Rendering (SSR)"),"\n",l.createElement(n.li,null,"Concurrent Rendering"),"\n",l.createElement(n.li,null,"Streaming SSR"),"\n",l.createElement(n.li,null,"Suspense"),"\n"),"\n",l.createElement(n.h2,null,"Server-side Rendering (SSR)"),"\n",l.createElement(n.p,null,"말 그대로 server에서 rendering해서 UI(HTML)를 보여주는 방식을 뜻하지만, React(SPA) 환경에서는 보통 ",l.createElement(n.a,{href:"https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering"},"Next.js pages router의 SSR(dynamic rendering)"),"과 같은 기법을 말한다."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"페이지 접근 시 서버에서 React app을 실행(render)해 HTML 문자열을 응답한다."),"\n",l.createElement(n.li,null,"client에서는 HTML 응답 받으면 React app js 번들을 로딩한다."),"\n",l.createElement(n.li,null,"번들의 React app을 재실행해서 hydrate 처리한다."),"\n"),"\n",l.createElement(n.p,null,"SEO 최적화, 최초 콘텐츠 표시 시간 단축을 위해 사용한다."),"\n",l.createElement(n.h2,null,"Concurrent Rendering"),"\n",l.createElement(n.p,null,"React의 render 작업을 잘게 나누고 우선순위를 부여해 render 작업을 React가 직접 제어(중단, 재개, 파기)할 수 있는 rendering 형태이다."),"\n",l.createElement(n.p,null,"이전의 React는 synchronous rendering 형태였기 때문에 한번 render 작업이 시작되면 exception이 아닌 이상 render를 중단할 수 없었다. 이는 진행 중인 render 작업이 오래 걸릴 경우 다른 빠른 응답이 중요한(= 우선순위가 높은) 작업의 처리가 늦어지는 불상사가 발생한다."),"\n",l.createElement(n.p,null,"concurrent rendering 환경에서는 현재 진행 중인 render 작업보다 우선순위가 높은 작업이 있으면 진행 중인 작업은 중단하고 우선 처리하게 된다. 하지만 Javascript single thread 구조에서는 처리 중인 작업이 있을 때 우선순위가 높은 작업이 있는지 알 수도 없고 처리할 수도 없는데, 이를 해결하기 위해 React는 잘게 나눈 render 작업을 5ms 마다 멈추고 main thread를 양보한 뒤, 우선순위가 높은 작업이 있으면 먼저 처리한 후 재개하도록 scheduling 처리를 한다."),"\n",l.createElement(n.h2,null,"Streaming SSR"),"\n",l.createElement(n.p,null,"기존의 dynamic renering은 SSR 단계들을 동기적으로 진행하며 단계마다 전체 tree에 대해서 처리해야 한다는 약점(waterfall)이 있었다."),"\n",l.createElement(n.p,null,"Streaming SSR은 해당 약점을 개선한 버전으로 stream HTML과 selective hydration 기술을 통해 tree를 부분별로 나눠서 SSR을 진행한다."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"stream HTML"),"\n"),"\n",l.createElement(n.p,null,"react tree를 기존의 string HTML 대신 Suspense 단위로 streaming 한다. HTML을 생성할 때 Suspense 내부의 로딩을 기다리지 않고 fallback을 즉시 render 하기 때문에 UI를 더 빠르게 보여줄 수 있다. 이후 Suspense의 로딩이 완료되며 ",l.createElement(n.code,null,"fallback"),"과 ",l.createElement(n.code,null,"children"),"을 replace 처리하는 로직을 추가로 stream해서 화면을 표시한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-html"},"<div id='root'>\n  ...\n  <div id='tg'>Loading...</div>\n  ...\n</div>\n\x3c!-- Loading이 완료되면 streaming 됨 --\x3e\n<div hidden id='children'>\n  \x3c!-- 실제 children HTML --\x3e\n</div>\n<script>\n  ...\n  document.getElementById('tg').replaceChildren(\n    document.getElementById('children')\n  );\n<\/script>\n")),"\n",l.createElement(n.p,null,"nested Suspense에서도 동일한 과정을 계속 거치며 tree 전체의 로딩이 완료되면 streaming이 마무리된다."),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"selective hydration"),"\n"),"\n",l.createElement(n.p,null,"stream HTML이 UI을 빠르고 효율적으로 보여줄 수 있게 해준다면 selective hydration은 전체 tree를 대상으로 진행되던 hydrate 작업을 빠르고 효율적으로 만들어 준다."),"\n",l.createElement(n.p,null,"hydration을 전체 tree를 대상으로 하는 게 아닌 선택적으로 일부만 진행을 하는 방식으로 stream HTML의 전체 로딩이 완료되기 전에 미리 완료된 부분부터 빠르게 hydrate 처리를 할 수 있게 해준다."),"\n",l.createElement(n.p,null,"concurrent rendering과 비슷하게 hydration을 잘게 나눴다고 볼 수 있는데, 동일하게 hydrate 작업 진행 중 다른 hydrate 되지 않은 component에서 이벤트가 발생하면 hydrate를 중단하고 해당 component부터 hydrate를 우선 진행할 수 있다."),"\n",l.createElement(n.h2,null,"Suspense"),"\n",l.createElement(n.p,null,"Suspense는 async data 로딩이 끝낼 때까지 children render를 연기하며 fallback을 보여주는 역할을 하는 component다. 초기에는 ",l.createElement(n.code,null,"React.lazy"),"와 함께 code splitting을 목적으로만 사용되는 component였지만 현재는 위에서 언급한 Streaming SSR의 서포트 역할도 하며 일부 data fetching hooks와 함께 사용되기도 한다."),"\n",l.createElement(n.h1,null,"왜 RSC가 만들어졌을까: 클라이언트 중심 앱 (서버 사용의 결핍)"),"\n",l.createElement(n.p,null,"기존 React 앱은 ",l.createElement("b",null,"클라이언트 중심"),"으로 만들어지기 때문에 서버의 이점을 제대로 누리지 못한다. 메타 프레임워크 같은 것을 통해 SSR 한다고는 하지만 그것도 페이지 최초 접근에만 유의미하게 쓰이며 이후에는 다시 client로 돌아와 CSR로만 작동한다."),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/server-client.png"})),"\n",l.createElement(n.p,null,"클라이언트 환경에서 최대한 많은 작업을 수행하기 위해 앱의 구조는 점점 복잡해져만 갔고 여러 문제들이 생겨났다."),"\n",l.createElement(n.p,null,"해당 문제들은 서버를 좀 더 활용하면 개선할 수 있는 것들이었는데 React 팀은 어떻게 하면 React에서 서버를 좀 더 활용할 수 있을지를 고민했고, 그 결과 ",l.createElement("b",null,"Component 모델을 서버로 확장한")," RSC를 만들었다."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"서버에서 실행되기 때문에 서버의 이점을 충분히 사용할 수 있다."),"\n",l.createElement(n.li,null,"서버와 클라이언트가 Component를 통해 마찰 없이 매끄럽게 결합된다."),"\n",l.createElement(n.li,null,"Component 모델은 그대로지만 서버에서 실행된다는 개념만 추가했다."),"\n"),"\n",l.createElement(n.p,null,"hooks로 function component가 자연스럽게 stateful/stateless 변환을 하는 것처럼, ",l.createElement(n.code,null,'"use strict"'),"와 닮은 ",l.createElement(n.code,null,'"use client"')," directive로 function component가 자연스럽게 server/client 변환을 할 수 있다."),"\n",l.createElement(n.h1,null,"리액트 서버 컴포넌트"),"\n",l.createElement(n.p,null,"React Server Component는 서버에서 실행되는 component ",l.createElement("b",null,'"서버의 컴포넌트화"'),"이다."),"\n",l.createElement(n.p,null,"기존 React Component는 클라이언트만을 컴포넌트화했다. 웹 클라이언트에서 하던 것처럼 DOM을 핸들링하고 Browser API를 사용한다. RSC는 서버를 컴포넌트화했고 서버에서 실행된다. 서버에서 하던 것처럼 서버 영역 데이터를 직접 접근하고, cors에서 자유롭고, 서버에서 UI를 응답한다. server component와 client component는 각기 다른 영역을 컴포넌트화했기 때문에 서로 다른 전문 분야를 가지고 있다."),"\n",l.createElement(n.p,null,"기존에는 어떤 기능을 컴포넌트화했느냐에 상관없이 client component가 하던 일을 이제는 server가 잘하는 일은 server component가 하고 client가 잘하는 일은 client component가 할 수 있도록 선택지가 생긴 것이다."),"\n",l.createElement(n.h2,null,"RSC가 추가된 React 환경 이해하기"),"\n",l.createElement(n.p,null,"기존의 React 환경과 RSC가 추가된 React 환경은 크게 다르지 않다. Dan Abramov의 ",l.createElement(n.a,{href:"https://github.com/reactwg/server-components/discussions/4"},'"Why do Client Components get SSR\'d to HTML?"'),"라는 글에서 잘 시각화 해뒀는데 그 이미지들을 빌려와 소개해 보겠다."),"\n",l.createElement(n.p,null,"기존의 React 멘탈 모델은 아래와 비슷할 것이다. React Tree가 존재하고 SSR 유무에 상관없이 html이 있고, js bundle로 component를 받아와서 render(or hydrate) 한다."),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/tree1.png"})),"\n",l.createElement(n.p,null,"RSC는 기존의 React Tree는 그대로 두고 React Tree 이전에 미리 서버에서 실행되는 server layer만 추가했다."),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/tree2.png"})),"\n",l.createElement(n.p,null,"Server Tree가 추가됨에 따라 기존 React Tree를 Client Tree라고 바꿔 생각해 본다면 보다 친숙한 Server/Client 개념으로 더 명확할 것이다."),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/tree3.png"})),"\n",l.createElement(n.p,null,"우리가 알던 React app은 ",l.createElement("b",null,'"Client"'),"라는 이름표가 붙은 것 빼고는 바뀐 게 없다. Server Tree가 생겨난 것뿐이다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"여기서 알 수 있는 점은 RSC가 추가된 최신 환경에서 RSC를 아예 안 쓰더라도 이전처럼 앱을 정상적으로 만들 수 있고 잘 작동한다는 것이다."),"\n"),"\n",l.createElement(n.h2,null,"제2의 PHP?"),"\n",l.createElement(n.p,null,'React Server Component와 관련해서 출시 초기에 제2의 PHP, Rails 같은 반응을 많이 보았다. 많이 다르지만 단순 RSC 기능만 놓고 본다면 "(전체 새로고침을 하지 않는) 제2의 PHP"로 봐도 될 것 같다.'),"\n",l.createElement(n.p,null,"React 팀은 서버로 환경을 확장하면서 올드 스쿨 MPA 웹의 장점을 React에 녹여내고 싶어 했다. 당시에는 SPA 같은 거 없이 다 SSR이고 프론트엔드 개발이라는 게 자리 잡지 않았기 때문에 장점들이 제대로 인정받지 못한 것 같지만, 최신 웹과 비교했을 때 올드 스쿨 웹은 ",l.createElement("b",null,"client 측면에서 매우 단순한 요청/응답 멘탈모델"),"을 가지고 있다."),"\n",l.createElement(n.p,null,"대부분 작업이 요청/응답 사이클 안에서 처리된다. client는 페이지 이동, UI refresh 혹은 서버 작업이 필요하면 그냥 서버로 요청하며 서버는 요청에 맞는 작업을 하거나 UI를 응답한다. RSC는 이런 점을 차용했는데 페이지가 필요할 때 단순히 서버로 요청하면 그에 맞는 UI(HTML string 대신 JSON-like format 데이터)를 응답하는 구조를 가지고 있다. 다른 페이지로 이동할 때도, UI refresh가 필요할 때도 서버에 ",l.createElement("b",null,'"한번"')," 요청하고 그 응답을 보여준다. Client Component로 귀찮게 waterfall, code splitting, state, request 등을 관리할 필요가 없어진 것이다."),"\n",l.createElement(n.p,null,"이렇게 올드 스쿨 웹의 모델을 차용했지만 React스럽다. server와 client는 기존 client only 환경과 다를 것 없이 자연스럽게 결합하며 Server Component 업데이트는 기존 React re-rendering처럼 자연스럽다. pure client, pure server app과 비교했을 때 더 유연하고, 더 좋은 UX, DX를 가지고 있다."),"\n",l.createElement(n.p,null,"단순히 서버로 요청하면 서버가 UI를 응답한다 라고 생각해보면 Server Component에 대해 알 수 있는 정보들이 몇 가지 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"server component는 stateless이며 effect가 존재하지 않는다. 요청이 오면 응답하는 일회성 구조에서는 react state나 effect hooks가 필요 없다."),"\n",l.createElement(n.li,null,"client로의 데이터 전달에 serialization이 필요하다. client runtime 내에서의 데이터 전달이 아닌 응답으로 전달되는 것이므로 function, Set, Date와 같은 데이터는 전달하지 못한다."),"\n",l.createElement(n.li,null,"client 환경 API 사용을 못 한다."),"\n"),"\n",l.createElement(n.h2,null,"Server, Client, Shared"),"\n",l.createElement(n.p,null,"Server Component의 추가로 component는 Server, Client, Shared 세 가지로 나뉜다. 어떻게 구분하는지와 실행되는 환경, 기능을 분류해 보자."),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/shared1.png"})),"\n",l.createElement(n.p,null,"우선 정확하게 하자면 ",l.createElement("b",null,'"component"'),"를 server/client 구분한다기보다는 ",l.createElement("b",null,'"component tree의 sub tree"'),"를 server/client로 구분한다. 어떤 component가 server인지 client인지를 tree의 component 별로 구분하는 것이 아니라, ",l.createElement("b",null,"특정 component를 기준점으로 component tree가 server/client로 구분된다"),"는 뜻이다. 이를 위한 경계로 component file 최상단에 ",l.createElement(n.code,null,'"use client"')," directive를 선언하는데 해당 component를 기준으로 client tree로 취급한다."),"\n",l.createElement(n.p,null,"Next.js에서는 기본적으로 모든 component들을 server로 취급한다. (정확하게는 shared로 취급하지만 일단 넘어가자) 하지만 ",l.createElement(n.code,null,'"use client"')," directive가 선언된 client component가 있다면 ",l.createElement("b",null,"해당 component를 기점으로 해당 component + file에 ",l.createElement(n.code,null,"import")," 된 모든 component들을 client component로 취급한다"),". component 뿐만 아니라 모든 코드(hooks, utils, etc)가 동일한 방식으로 server/client로 나뉜다."),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/shared2.png"}),l.createElement("figcaption",null,"component 단위가 아니라 tree 단위이다")),"\n",l.createElement(n.h3,null,"Server, Client"),"\n",l.createElement(n.p,null,"server/client 각각 어떤 기능과 조건이 있을까?"),"\n",l.createElement(n.p,null,"server - 서버에서 실행하는 component에 맞는 기능들을 가지고 있다. async component, server level 정보 접근, 직접 data fetch, client level로 정보 유출 X, 등등. 대신 조건으로 당연하지만 ",l.createElement(n.code,null,'"use client"')," directive가 있으면 안 되고, client level 기능(DOM interactive, 기타 browser API 등) 사용을 못 하고 react state, effect hooks를 사용하지 못한다."),"\n",l.createElement(n.p,null,"client - 우리가 기존에 알던 component다. client level 기능을 사용할 수 있고 react state, effect hooks도 자유롭게 사용할 수 있다. 조건도 ",l.createElement(n.code,null,'"use directive"')," directive를 제외하면 기존과 동일하다."),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/shared3.png"})),"\n",l.createElement(n.h3,null,"Shared"),"\n",l.createElement(n.p,null,"server/client를 나누는 유일한 기준점은 ",l.createElement(n.code,null,'"use client"'),"이다. 다시 ",l.createElement(n.code,null,'"use server"')," 같은 걸 써서 server로 변환할 수 없다. 즉, ",l.createElement("b",null,"client component에서 server component를 "),l.createElement(n.code,null,"import"),l.createElement("b",null," 하면 client component 처럼 취급할 것이기 때문에 오작동할 것이다.")," 그렇다면 아래 코드는 오작동하는 코드일까?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},"// ServerComponent.tsx\nimport Hello from './Hello'; // server에서 사용\nimport ClientComponent from './ClientComponent';\n\nexport default async function ServerComponent() {\n  return (\n    <div>\n      <Hello name='server' />\n      <ClientComponent />\n    </div>\n  );\n}\n\n// Hello.tsx\nexport default function Hello({ name }) {\n  return (\n    <h1>Hello, {name}</h1>\n  );\n}\n\n// ClientComponent.tsx\n'use client'\n\nimport Hello from './Hello'; // client에서도 사용\n\nexport default function ClientComponent() {\n  return (\n    <div>\n      <Hello name='client' />\n    </div>\n  );\n}\n")),"\n",l.createElement(n.p,null,"Server Component인 ",l.createElement(n.code,null,"Hello"),"가 ",l.createElement(n.code,null,"ClientComponent"),"에서도 ",l.createElement(n.code,null,"import")," 되어 쓰이고 있다. 하지만 실제로 확인해 보면 재밌게도 정상적으로 잘 작동한다."),"\n",l.createElement(c,{codeSandboxId:"server-client-shared-nnhsc4"}),"\n",l.createElement(n.p,null,"여기서 shared 개념이 등장하는데, ",l.createElement(n.code,null,"Hello")," component가 client component로 사용된다고 했을 때 문제점이 있을까? 전혀 없다. 당연히 server component로 사용해도 문제가 없을 것이다. 이런 식으로 server/client tree 양쪽에서 모두 사용할 수 있는 component를 shared component라 부르며, 위에서도 언급은 했지만 사실 ",l.createElement("b",null,"component는 기본적으로 server가 아니라 shared로 취급한다.")),"\n",l.createElement(n.p,null,"shared component가 되려면 server의 조건(",l.createElement(n.code,null,'"use client"'),' ❌, client level 기능 ❌, state, effect hooks ❌, ...)을 만족하면서 client의 조건(async function ❌, server level 기능 ❌, server file import ❌, ...)도 만족해야 한다. server/client 양측의 조건을 모두 만족해야 한다니 까다로울 것 같지만, 막상 app을 만들다 보면 생각보다 많은 component들이 shared 형태를 띠며 자주 사용된다. ("client level 기능과 react hooks 사용을 안 하는 stateless component"라 할 수 있다)'),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/shared4.png"})),"\n",l.createElement(n.h3,null,"Client Component 내부에 Server Component 렌더링하기"),"\n",l.createElement(n.p,null,"client tree에서 직접 server component를 사용하는 건 불가능하지만 ",l.createElement("b",null,"composition을 사용해 client tree 내부에 server component를 렌더링할 수 있다.")," 기존에 composition 하던 것처럼 server component element(JSX)를 server component에서 client component로 props로 넘기면 된다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},"// ServerComponent.tsx\nimport Hello from './Hello';\nimport ClientComponent from './ClientComponent';\n\nexport default async function ServerComponent() {\n  return (\n    <div>\n      <ClientComponent>\n        <Hello />\n      </ClientComponent>\n    </div>\n  );\n}\n\n// Hello.tsx\nexport default async function Hello() {\n  const name = await getName();\n\n  return (\n    <h1>Hello, {name}</h1>\n  );\n}\n\n// ClientComponent.tsx\n'use client'\n\nexport default function ClientComponent({ children }) {\n  return (\n    <div>\n      {children}\n      Hello, client\n    </div>\n  );\n}\n")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Hello")," component는 server tree 내에 존재해서 SSR 되지만 props를 통해 client component로 넘겨져서 UI가 표시되는 위치는 client tree 내부가 되는 것이다. 이런 식으로 composition을 사용하면 client component에서 server component를 직접 import 해서 사용 못 한다는 제약을 우회할 수 있다."),"\n",l.createElement(c,{codeSandboxId:"server-client-composition-kv55qr"}),"\n",l.createElement(n.h2,null,"SSR(dynamic rendering)은 사라지는 건가?"),"\n",l.createElement(n.p,null,l.createElement("b",null,"RSC로는 SSR을 대체할 수 없다.")," ",l.createElement("code",null,"getServerSideProps"),"는 사라졌지만, pages router에서의 ",l.createElement("a",{href:"https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering",target:"_blank"},"SSR")," 개념은 사라지지 않는다."),"\n",l.createElement("figure",null,l.createElement("img",{src:"/rsc/ssr1.png"})),"\n",l.createElement(n.p,null,"둘은 서로 다른 목적과 개념을 가지고 있다. 요청에 맞는 HTML 생성이 목적인 dynamic rendering과 server에서 실행되는 component가 목적인 RSC는 서로 대체할 수 있는 게 아닌 ",l.createElement("b",null,"상호보완적인 관계"),"에 가깝다."),"\n",l.createElement(n.p,null,"이 부분은 app router가 기본으로 dynamic rendering 처리를 해줘서 많은 사람이 헷갈려 하는데 ",l.createElement("b",{style:{color:"#1971c2"}},"server component"),"가 SSR을 하는 건 맞지만, SSR의 결과물은 기본적으로 HTML이 아닌 UI description(",l.createElement(n.code,null,'["$","div",null,{"children":[...]}]'),")이다. RSC 개념에 SSR은 들어가 있지만 dynamic rendering은 들어가 있지 않은 것이다. (",l.createElement("b",{style:{color:"#2f9e44"}},"client component"),"는 당연하게도 CSR만 한다)"),"\n",l.createElement(n.p,null,"그렇기 때문에 RSC를 사용하더라도 dynamic rendering이 필요하다면 여전히 dynamic rendering 처리를 해주어야 하며 아직 유효한 기술이다."),"\n",l.createElement(n.h1,null,"효과와 trade-off"),"\n",l.createElement(n.p,null,"RSC가 주는 효과와 trade-off는 app의 일부분이 서버에서 실행된다는 것에서 나온다."),"\n",l.createElement(n.h2,null,"효과"),"\n",l.createElement(n.h3,null,"올드 스쿨 웹에서 가져온 것"),"\n",l.createElement(n.p,null,"심플한 멘탈모델과 서버를 직접 활용함으로써 서버 레이어의 장점들을 얻을 수 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"서버 데이터 직접 접근, no cors, security, low latency, cache, …"),"\n"),"\n",l.createElement(n.h3,null,"Client 중심의 문제 개선"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"zero bundle"),": 기본적으로 server component는 서버에서만 실행하기 때문에 무거운 component와 의존성이 bundle로 넘어가지 않게 된다. 그렇기 때문에 bundle 사이즈 감소는 물론 이를 위해 tree shaking이나 code splitting 같은 기법들로 고민하지 않아도 된다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"성능 개선"),": js bundle이 적어지고, component의 실행이 서버로 옮겨졌기 때문에 성능 개선에 도움이 된다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"waterfall 문제 개선"),": client와 server 간의 요청을 1회로 줄여서 client/server waterfall을 제거했다. 또한 Suspense를 이용하면 waterfall을 위한 loading state 관리도 제거된다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"no code splitting"),": server component는 code splitting을 자동으로 수행한다. server component file에서 client component import를 code splitting 지점으로 취급하기 때문에 load 되지 않은 component는 이후에 자동으로 lazy loading 된다. ",l.createElement("code",null,"React.lazy"),", ",l.createElement("code",null,"dynamic import")," 쓰면서 하던 귀찮음이 줄어들었다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"단순한 data fetch"),": component 레벨에서 data fetch는 useEffect + useState로 하면 모양새도 이상하고 귀찮은 문제여서 주로 lib(react-query, swr…)을 활용한다. server component에서는 그냥 component에서 direct로 fetch 하면 된다."),"\n"),"\n"),"\n",l.createElement(n.h2,null,"Trade-off"),"\n",l.createElement(n.p,null,"Server Component는 위 장점들과 서버 비용 + 구성에 대한 복잡도를 교환했다고 볼 수 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"프레임워크는 필수"),": 기존보다 높은 수준의 bundler integration과 rendering 처리가 필요하기 때문에 프레임워크 없이 사용하기 쉽지 않다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"새로운 멘탈모델"),": 개발자들이 RSC가 추가된 멘탈모델을 새로 장착해야 한다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"더 높은 개발자 역량 요구"),": 서버를 직접 사용하는 것이다 보니 메모리 누수 같은 조금 더 신경 써줘야 하는 부분이 생기며, 결국 앱에 server/client라는 조건이 하나 더 추가된 것이다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"디버깅 환경 +1"),": 디버깅해야 하는 환경에 서버가 추가됐다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"무거워진 refresh"),": server component는 전체 component tree를 refresh 하기 때문에 일부 component의 refresh가 필요해도 전체 tree를 refresh 해야한다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement("b",null,"높아진 러닝커브"),": 높아진 복잡도를 제쳐 두더라도 server/client를 동시에 제어하는 건 뉴비에게는 접근이 쉽지 않을 것이고, client 중심에만 익숙한 개발자들도 마찬가지이다."),"\n"),"\n"),"\n",l.createElement(n.h1,null,"고찰"),"\n",l.createElement(n.p,null,"React Server Component의 진면목은 서버에서 실행되는 기능이 아니라 server/client가 React 안에서 자연스럽게 결합한다는 것이라 생각하고, Component 모델을 서버로 확장했다는 점에서 굉장히 React스럽게 기능을 잘 만들었다는 생각이 든다. (+ 기존에 meta framework level(",l.createElement(n.code,null,"getServerSideProps"),", ",l.createElement(n.code,null,"loader"),")에서 처리하던 걸 React level로 가져왔다는 점)"),"\n",l.createElement(n.p,null,"많은 이점을 제공해도 그에 맞는 trade-off가 있기 때문에 무작정 사용하기보다는 우선 장단점을 고려해서 프로젝트에 적합한지 생각하는 게 중요할 것 같고, 글을 올리는 날 기준으로도 아직 제대로 지원하지 않는 lib이 정말 많고 Next.js 레벨에서는 caching 관련으로 원성을 사고 있다. 환경이 성숙해지기 전까지는 제품 레벨에서는 굳이 쓰지 않아도 될 것 같다."),"\n",l.createElement(n.h1,null,"참고"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md"},"server component rfc")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://github.com/reactwg/server-components/discussions"},"react working group discussions")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://nextjs.org/docs"},"Next.js Docs")),"\n",l.createElement(n.li,null,"dan abramov의 모든 트윗와 유튜브 출연 영상들"),"\n"))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)};function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=t(1510),i=t(7717),u=t(6089),s=t(1042),p=t(5242),d=t(7271),E=t(5109),g=t(1869);const h={Tweet:i.Yk,CodeSandbox:i.dH},v=m.default.div.withConfig({displayName:"mdxparent__File__name__Container",componentId:"sc-15llss4-0"})(["padding:32px 0;> h2{margin:0;font-size:3rem;line-height:3.75rem;letter-spacing:-0.0625rem;font-weight:100;font-family:Georgia,Times,serif;}> .date{margin:32px 0 56px;text-align:right;}img{max-width:100%;}figure{margin:1.5rem 0;img{display:block;margin:0 auto;}figcaption{font-size:0.875rem;color:#757575;text-align:center;}}@media (max-width:680px){> .date{font-size:1.3rem;}> .content{font-size:1.5rem;line-height:2.25rem;}}"]);function f(e){let{data:n,children:t}=e;return l.createElement(u.A,{pageTitle:n.mdx.frontmatter.title},l.createElement(s.A,{title:n.mdx.frontmatter.title,description:n.mdx.frontmatter.preview,slug:n.mdx.frontmatter.slug}),l.createElement(v,null,l.createElement("h2",null,n.mdx.frontmatter.title),l.createElement("p",{className:"date"},n.mdx.frontmatter.date),l.createElement("div",{className:"content"},l.createElement(r.xA,{components:Object.assign({pre:p.A,a:E.A,h1:d.H1,h2:d.H2,h3:d.H3,h4:d.H4,h5:d.H5,h6:d.H6,TableOfContents:e=>l.createElement(g.A,Object.assign({},e,{headings:n.mdx.headings}))},h)},t))),l.createElement("img",{src:"https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpyjun01.github.io/v/"+n.mdx.frontmatter.slug+"&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false",style:{opacity:0}}))}function S(e){return l.createElement(f,e,l.createElement(a,e))}}}]);
//# sourceMappingURL=component---src-pages-v-mdx-parent-file-name-tsx-content-file-path-src-blog-rsc-mdx-a13faa7b10620cdc717a.js.map