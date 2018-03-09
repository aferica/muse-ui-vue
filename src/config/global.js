let isDesktop = getWidth() ;

function getWidth () {
  return window.innerWidth > 993 ?  1/3 : ( window.innerWidth > 450 ? 0.5 : 1) ;
}

let ALLAPI = {
  API: 'https://www.aferica.wang/api/getNoEncode/byurl?url=',
  EncodeAPI: 'https://www.aferica.wang/api/getWithEncode/byurl?mainurl=',
  IMGAPI: 'https://www.aferica.wang/api/getimg/byurl?url=',

  static:'https://www.aferica.wang/api/getimg/byurl?url=http://statics.zhuishushenqi.com',
  category: {
      // 带书籍数量的父分类
      categoryWithBookCount: 'http://api.zhuishushenqi.com/cats/lv2/statistics',
      // 带子分类的父分类
      categoryWithSubCategories: 'http://api.zhuishushenqi.com/cats/lv2',
      // 分类详情: 带着书籍
      categoryInfo: 'http://api.zhuishushenqi.com/book/by-categories'
      // categoryInfo: 'http://novel.juhe.im/category-info'
  },
  book: {
      // 书籍详情
      bookInfo: 'http://api.zhuishushenqi.com/book', // id 书籍id
      // 相关推荐
      relatedRecommendedBooks: 'http://api.zhuishushenqi.com/book', // http://api.zhuishushenqi.com/book/56d0b60dfb51235c3a7a2739/recommend
      // 作者名下的书籍
      authorBooks: 'http://api.zhuishushenqi.com/book/accurate-search', // query ?author=忘语
      // 书籍章节内容
      bookChapters: 'http://api.zhuishushenqi.com/mix-atoc',
      // 书源
      bookSources: 'http://api.zhuishushenqi.com/atoc', // query ?view=summary&book=5779b38d3b433dd647d95da2
      // 章节内容:id 单章id
      chapterContent: 'http://chapter2.zhuishushenqi.com/chapter/', //id: chapter id
      // 书籍搜索 可以搜索作者但是不精确
      bookSearch: 'http://api.zhuishushenqi.com/book/fuzzy-search' //query ?query=凡人修仙传
  },
  rank: {
      // 排名分类
      rankCategory: 'http://api.zhuishushenqi.com/ranking/gender',
      // 排名详情
      rankInfo: 'http://api.zhuishushenqi.com/ranking' // id: rank id
  },
  comment: {
      /**评论详情
       * @param book: {bookId},
       * @param sort: (updated|created|comment-count),
       * @param start,
       * @param limit
       */
      commentInfo: 'http://api.zhuishushenqi.com/post/review/by-book',

      //
  },
  bookList: {
      //书单
      /**
       * query string: {
       *     sort: (collectorCount|created),
       *     duration: (last-seven-days|all),
       *    gender: (male|female),
       *     tag: (有点多),
       *     start
       *   }
       *
       *            说明:
       *
       *            本周最热的query是: sort=collectorCount&duration=last-seven-days&start=0
       *            最新发布是: sort=created&duration=all
       *            最多收藏是: sort=collectorCount&duration=all
       *
       */
      bookList: 'http://api.zhuishushenqi.com/book-list',
      //书单详情
      bookListInfo: 'http://api.zhuishushenqi.com/book-list/' //书单ID
  },
  photo: {
      getPictureByTagsOr: 'https://www.aferica.wang/api/picture/getPictureByTagsOr',
      getPictureByTagsAnd: 'https://www.aferica.wang/api/picture/getPictureByTagsAnd',
      getPictureById: 'https://www.aferica.wang/api/picture/getPicture',
      getPictureNumber: 'https://www.aferica.wang/api/picture/getPictureNumber'
  },
  user: {
      captcha: 'https://www.aferica.wang/api/common/getCaptchaPng',
      login: 'https://www.aferica.wang/api/user/login',
      register: 'https://www.aferica.wang/api/user/register'
  }
}

export default {
  isDesktop,
  getWidth,
  ALLAPI
}
