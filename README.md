# keypair_temp
exchange api

혹시 몰라서 인증 키 필요한 사이트 세 곳 첨부합니다

* 인증 키 필요한 환율 API 사이트

https://fixer.io/
(외국 사이트)

https://exchangeratesapi.io/
(외국 사이트)

https://www.koreaexim.go.kr/ir/HPHKIR020M01?apino=2&viewtype=C&searchselect=&searchword=
(한국 수출입 은행)

추가적으로 CORS문제가 있어서 빠르게 해결하고자 package.json 파일에
  "proxy":"https://api.coinone.co.kr",
프록시 추가하였습니다!
