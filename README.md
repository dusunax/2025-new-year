# 2025 New Year Card Maker ✨

>- new version of the [2024 New Year Card Maker](https://github.com/dusunax/2024-new-year)

![2025-card-maker](https://github.com/user-attachments/assets/a0c45d27-928e-4b39-bd3e-c961ee315d3b)

---

## 기술 스택
```
TypeScript, Next.js (v15), OpenAI (DALL·E 3), ShadCN, Tailwind CSS, Framer Motion, Vercel
```

## 2025 신년 카드 메이커 ✨

새해를 준비하며 [2024 신년 카드 메이커](https://github.com/dusunax/2024-new-year)를 리뉴얼 했습니다.  
푸른 뱀이 그려진 AI 이미지를 직접 만들어보세요. 4가지 컨셉을 조합해 카드를 만들 수 있어요.

### 주요 기능

1. 컨셉을 선택하여 카드의 이미지를 만듭니다.
2. 메시지, 보내는 사람, 보낼 사람을 입력합니다.
3. 이미지와 텍스트를 합친 카드 파일을 저장합니다.
4. 홈페이지 링크를 공유합니다. (현재는 이미지를 서버에 저장하지 않고, 서비스 주소만 공유해요)

### 2025년 버전 업데이트 사항

#### 섹션 구성 변경:
- 기존: 원페이지 내 vh 기준 섹션 구성
- 변경: 퍼널 단계 구성으로 전환하여 사용자 흐름에 초점을 맞춤
  - `@use-funnel` 설계로 직관적인 단계별 UX 제공

#### OpenAI 요청 처리 방식 개선
- 기존 클라이언트 측에서 전송하던 api 요청을 서버 측으로 이동하여 보안 및 성능 개선

#### UI 디자인
- CSS Grid: 컨셉 선택 리스트, 카드 내 텍스트 박스에 Grid를 활용한 UI 구현
- 애니메이션 요소: Framer Motion을 활용한 로딩, 드래그, 호버 이벤트에 애니메이션 효과 적용
  - 인터랙션 시 부드럽고 직관적인 시각적 피드백 제공

### 스크린샷

#### 데스크탑
![241227-desktop-3](https://github.com/user-attachments/assets/ab17dd71-a2ee-4316-8182-d3d9198a500a)
![241227-desktop-6](https://github.com/user-attachments/assets/e1714e88-8f89-4145-929c-3543bf70cb9c)

#### 모바일
<img src="https://github.com/user-attachments/assets/43502433-cd4d-4658-b9b1-a5d223cda9cb" width="200" />
<img src="https://github.com/user-attachments/assets/11e45d47-c6ca-43ad-b76f-287f75a5b028" width="200" />
<img src="https://github.com/user-attachments/assets/528b13ff-f0f2-45cf-bdac-5e42cb9bff9c" width="200" />
<img src="https://github.com/user-attachments/assets/9905bce5-0029-4650-925b-7554e27a703a" width="200" />

## 시연

> Youtube 시연 영상: https://www.youtube.com/watch?v=egHYZVpYxuM

<img src="https://github.com/user-attachments/assets/186520f3-fe4c-4381-bc1e-e40009865e5e" width="300" />
<img src="https://github.com/user-attachments/assets/0017ce48-a595-4589-a0f2-2164fd0f8fe3" width="300" />
<img src="https://github.com/user-attachments/assets/7a1a6f70-1070-4000-9f07-a105dc5fa360" width="300" />
