Git & Github
============
![git, github](https://cdn-images-1.medium.com/max/1000/1*qwFrTMnFkcd3U9rFKwwacw.png)

Git
===

## 깃?
[Git](https://git-scm.com/)은 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 파일작업을 효율적으로 조율하기 위한 **분산 버전 관리 시스템**으로, 리눅스 창시자인 **리누스 베네딕트 토르발스**가 개발했다.<br/>_(대부분의 OS를 지원한다!)_

## 깃을 사용하는이유
 * 누가, 언제, 무엇을, 어떻게, 왜 수정했는지를 확인할수있다.
 * 작업하던 파일이 날라가도 손쉽게 복구가능하다.
 * 대부분 텍스트에디터에서 *git*과 연동이 가능하다.<br/>
   (예로 **atom**같은 경우 *github*에서 제작한 에디터이기 때문에 기본적으로 깃 연동 툴이 구비되어있다!)
 * *github*을 통한 자신의 프로젝트 공유가 가능하다.
 
## [깃허브](https://github.com)
 * 깃을 사용하는 프로젝트를 지원하는 가장 인기있는 깃 호스팅 서비스로, <br/>각 프로젝트마다 별도의 **이슈 트래커**를 무료로 지원한다.
 * 깃허브에서는 소스코드의 수정기록을 자세히 볼수있다.
 
![수정기록](https://pyjun01.github.io/c.PNG)
#### 깃헙에서본 수정 기록 (<https://github.com/xviniette/FlappyLearning/commit/a75677d8ccbc87df3c91fcea81dd705114cd2285>)
  
  
## 깃 명령어
![깃 작업 흐름](https://cdn-images-1.medium.com/max/720/1*5KXszV8UWQDXWf9XwKEaSQ.png)<br/> 
#### 깃 작업 흐름 (<https://medium.com/cs-note/git-and-github-for-beginners-i-tutorial-263caa01f9c3>)<br/>

### 초기 설정

```
$ git config --global user.name "pyjun01"
$ git config --global user.email "pyjun01@naver.com"
```
프로젝트에 커밋할때 위에 기재한 정보가 사용된다.

### 깃 폴더 생성

```
 $ git init
 $ git clone https://github.com/pyjun01/github_test
```
* 깃 폴더는 ```git init```을 통해 만들수 있습니다.
* 원격 저장소에서 파일을 가져와 만들때는 ```git clone```을 통해 만들수 있습니다.

#### ```git init```으로 만든 폴더 원격 저장소와 연동하기

```
 $ git remote add origin repository-url
```
  ```git clone```을 통해 폴더가 만들어지면 원격 저장소가 지정한 url로 자동 설정이 되지만, <br/>
  ```git init```을 통해 만든 깃 폴더는 원격 저장소가 지정이 안돼있기때문에 ```git remote``` 명령어를 통해 원격 저장소를 설정해줘야 합니다.
  
  **(origin과 master는 깃의 기본 명칭으로 origin은 remote한 repository의 기본 별명이고 master는 기본 branch 이름이다.)**
  
### 깃 커밋하기

```
 $ git add *
```
 * 커밋을 하기위헤서는 먼저 ```git add```를 통해 현재 파일의 상태를 stagearea에 저장합니다.<br/>
   (add후 stagearea에 있는 파일은 파일이 수정돼도 다시 add하기 전까지는 변하지않는다)

```
 $ git commit -m "UI 개편"
```
 * ```git commit```으로 커밋을 하면 컴퓨터의 로컬 저장소로 현재 파일의 히스토리가 기록되고 저장된다.
 * 추후 오타가 발견되거나 덮어씌우기가 필요할경우 ```--amend```로 커밋을 수정한다.
```
 $ git add *
 $ git commit -m "UI 개편 등등" --amend
```
### 원격 저장소로 푸쉬하기

```
 $ git push origin master
```
 * ```git push``` 하면 지금까지 로컬 저장소로 커밋했던 내용들이 원격 저장소에 저장됩니다.

### 파일 업데이트

```
 $ git pull origin master
 $ git fetch origin master
```
 * 타인이 커밋한 파일들은 명령어를 통해 수동으로 업데이트 해야합니다.
 * ```pull```과 ```fetch```의 차이점은 ```merge```작업 유무 차이입니다.
 
### 파일 복원
 
```
 $ git reset HEAD~2
 $ git revert HEAD~2
```
  * HEAD~ 뒤의 숫자는 몇번째 전의 커밋으로 돌아갈건지를 나타냅니다.
  * ```reset```은 과거 커밋으로 돌아가면서 지금까지의 커밋을 삭제하지만, ```revert```는 돌아가는건 같지만 현재까지의 커밋에 과거 커밋을 새로 추가합니다.
  * ```git reset```은 원격 저장소까지 컨트롤할 수 없습니다.<br>
    즉 이미 원격 저장소에 ```push```를 한 상태라면, ```git revert```를 사용해야 합니다.<br>
    또한 ```reset``` 명령어는 테스트용 브랜치에서 테스트를 마치고 다시 병합하는 과정에서 커밋 히스토리를 깔끔하게 하려고 하는데 사용하고,
    ```revert``` 명령어는 되돌아갔다는 히스토리까지 상세하게 기록하기 위해서 사용합니다.<br>
    
### 브랜치
 
```
  $ git branch new-branch
```
 * 브랜치는 번역하면 분기, 가지라는 뜻으로 파일을 여러 갈래로 나누어 관리할수있습니다.
 * 예를 들어 현재 파일을 리액트 버전으로 바꾸고 싶다면 react.ver 브랜치를 생성해 그곳에서 따로 독립된 파일들로 작업할수 있습니다.
 * 브랜치는 기본적으로 master브랜치를 가지고 있으며 위 명령어를 통해 새로운 브랜치를 만들수있습니다.
 * 브랜치 리스트는 ```git branch```로 볼수있고, 브랜치 변경은 ```git checkout branch-name```을 통해 변경가능합니다.
 * 브랜치 삭제는 ```git branch -d branch-name```을 사용합니다.
 * 새로 생성한 브랜치를 통해 협업하려면 ```git push branch-name```로 원격 저장소로 푸쉬해줘야합니다.
 ![branch](https://pyjun01.github.io/branch.png)
 
 
#### 브랜치 병합
 * 다른 브랜치에서 현재 브랜치에 없는 코드가 개발되었고, 배포하기전 이를 합쳐야 할 때 사용합니다.
 * 병합 방식에서는 ```git merge```와 ```git rebase```가 존재합니다.
 
##### ```merge``` 예시

qwe branch를 생성하고, master 브랜치에 qwe 브랜치를 merge하려합니다.
파일 구성은 아래와 같습니다.
```
* master의 example.txt의 내용

  rnaster master mast9r
```
```
* qwe의 example.txt의 내용

  rnaster master mast9r and i'm example~!
```
```
$ git checkout master
$ git merge qwe
```
현재 브랜치는 master이고, qwe브랜치를 merge했다.
```
merge이후 master의 example.txt의 내용

  rnaster master mast9r and i'm example~!
```


## 참고한 글
 * <https://medium.com/cs-note/git-and-github-for-beginners-i-tutorial-263caa01f9c3>
 * <https://backlog.com/git-tutorial/kr/>
 * <https://git-scm.com/>
 * <https://rogerdudler.github.io/git-guide/index.ko.html>
