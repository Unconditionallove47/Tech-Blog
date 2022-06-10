const submitNewBlog = document.querySelector("#submitNewBlog");
submitNewBlog.addEventListener("click", e => {
    e.preventDefault();
    console.log("============clicked submitNewBlog============")

    const blogObject = {
        name: document.querySelector("#newBlogName").value,
        body: document.querySelector("#newBlogBody").value
    };

    console.log("========================", blogObject);
    fetch("controllers/api/blog", {
        method: "POST",
        body: JSON.stringify(blogObject),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload();
        } else {
            alert("Post error!");
        };
    })
})

const addNewComment = document.querySelector("#addComment");
addNewComment.addEventListener("click", e => {
    e.preventDefault();

    const commentObject = {
        body: document.querySelector("#newCommentBody")
    }

    fetch("controllers/api/comments", {
        method: "POST",
        body: JSON.stringify(commentObject),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload();
        } else {
            alert("Post error!");
        };
    })
})