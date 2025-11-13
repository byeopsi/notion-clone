let items = Array.from(document.querySelectorAll(".sub-item"));
    let addPostItems = Array.from(document.querySelectorAll(".add-post"));
    // 배열 필터링
    let filteredItems = items.filter(item => !addPostItems.includes(item));

    // 새 포스트 추가
    addPostItems.forEach((item) => {
      item.addEventListener("click", () => {addPost(item);})
    });

    // 포스트 불러오기
    filteredItems.forEach(function(item){
      item.addEventListener("click", () => {drawPost(item);})
    });

    let addPost = (item) => {
      const content = document.querySelector("#content");
      const h1 = document.createElement("h1");
      h1.textContent = "새 페이지";
      h1.setAttribute("contenteditable", true);
      
      const div = document.createElement("div");
      div.textContent = "흠냐링";
      div.setAttribute("contenteditable", true);

      content.textContent = "";
      content.appendChild(h1);
      content.appendChild(div);
    }

    // 임시 포스트 내용
    const posts = [
      {"id": "0", "title": "야호1", "content": "야호1입니다."},
      {"id": "1", "title": "야호2", "content": "야호2입니다."},
      {"id": "2", "title": "야호3", "content": "야호3입니다."},
      {"id": "3", "title": "야호4", "content": "야호4입니다."},
    ]

    // 포스트 내용 불러오는 함수
    let drawPost = (item) => {
      // 공유된 페이지 or 개인 페이지
      let shared = item.classList.contains("shared");
      let postSectionGroupTitle = document.querySelector("#post-section-group-title");
      if(shared){
        postSectionGroupTitle.innerText = "공유된 페이지";
      } else {
        postSectionGroupTitle.innerText = "개인 페이지";
      }

      let itemId = item.id.split('-')[1];
      
      let title = item.querySelector(".item-title").innerText;
      let postSectionTitle = document.querySelector("#post-section-title");
      postSectionTitle.innerText = title;
      
      const content = document.querySelector("#content");
      const h1 = document.createElement("h1");
      h1.textContent = posts[itemId]["title"];
      const div = document.createElement("div");
      div.textContent = posts[itemId]["content"];

      content.textContent = "";
      content.appendChild(h1);
      content.appendChild(div);
      
    }
