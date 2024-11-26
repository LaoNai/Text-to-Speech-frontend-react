import React from "react";

function Bookshelf() {
  return (
    <div>
      <div class="bookshelf_main">
        <div class="header">
          <h1>书架页面</h1>
        </div>

        <div class="bookshelf-page">
          {/* <!-- 操作按钮 --> */}
          <div class="action-buttons"></div>

          {/* <!-- 条件渲染表单，根据不同的操作显示对应的表单 --> */}
          <form v-if="showForm">
            <div v-if="showForm === 'add' || showForm === 'edit'">
              <label for="title">书名:</label>
              <input
                type="text"
                id="title"
                v-model="form.title"
                placeholder="请输入书名"
              />

              <label for="url">链接:</label>
              <input
                type="text"
                id="url"
                v-model="form.url"
                placeholder="请输入链接"
              />

              <label for="content">内容:</label>
              <textarea
                id="content"
                v-model="form.content"
                placeholder="请输入内容"
              ></textarea>

              <label for="cover_url">封面链接:</label>
              <input
                type="text"
                id="cover_url"
                v-model="form.cover_url"
                placeholder="请输入封面链接"
              />
              <label for="file_path">文件:</label>
              <input
                type="text"
                id="file_path"
                v-model="form.file_path"
                placeholder="文件"
              />
            </div>
          </form>

          {/* <!-- 小说列表展示，点击选择小说 --> */}
          <ul class="novel-list">
            <li v-for="(novel, index) in paginatedNovels" class="novel-item">
              <img v-if="novel.title" alt="封面" class="novel-cover" />
              <div v-if="novel.title" class="novel-info">
                <h2>{}</h2>
                <p>
                  链接: <a target="_blank">{}</a>
                </p>
              </div>
            </li>
          </ul>

          {/* <!-- 分页 --> */}
          <div class="pagination">
            <button>上一页</button>
            <span>
              第 {{ currentPage }} 页，共 {{ totalPages }} 页
            </span>
            <button>下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookshelf;
