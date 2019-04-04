//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    coverShow: false,
    coverQRCode: true,
    categoryList: {},
    productList: {},
    swiperCurrent: 0,
    previewImg: {
      url: '/pages/images/3Dpreview.jpeg',
    },
    banner: {
      imgUrls: [
        'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner.jpeg?sign=397c66e8166efc06ba6f76f21a31323b&t=1554276093',
        'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner2.jpeg?sign=c7f3e9c6c187d873e2b5542120f6fa4b&t=1554276172',
        'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner3.jpeg?sign=e18509687fbcfac926b8776be2ba98a7&t=1554276183',
        'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner4.jpeg?sign=de247c38b4c2fc3634068f2fe7b36058&t=1554276198',
        'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner5.jpeg?sign=cfe6b0893a266c3a8f64800a377c8122&t=1554276210',
        'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner6.jpg?sign=38748fd0b006244c4d2d6560eb13b3a6&t=1554276223',
        'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner7.jpeg?sign=8fe2a3f36c0aef5ce6424fea7acd527e&t=1554276236'
      ],
    },
    swiperbaner: [{
        name: '',
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/cover_images/cover_image3.jpeg?sign=b7210f26bcb61cd3cdcef03bbfb5023d&t=1554285145',
      },
      {
        name: '',
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/cover_images/cover_image2.jpeg?sign=8db4c4a880a8b1de23c525d2342ead02&t=1554285186'
      },
      {
        name: '',
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/cover_images/cover_image.jpeg?sign=64495aea8be68ffd815f39aca7fe6880&t=1554285165',
      },
      {
        name: '',
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/cover_images/cover_image5.jpeg?sign=fcbaf4c1189692a828d8c66e02879bbf&t=1554285228'
      }
    ],
    categoriesFirst: {},
    categoriesSecond: [{
        name: '包柱系列',
        imgUrl: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner2.jpeg?sign=c7f3e9c6c187d873e2b5542120f6fa4b&t=1554276172',
      },
      {
        name: '门套系列',
        imgUrl: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/banner/banner4.jpeg?sign=de247c38b4c2fc3634068f2fe7b36058&t=1554276198',
      },
    ],
    productsList: {
      '橱柜系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/橱柜/ambry2.jpg?sign=4a6080e08086cba2f6b290d03dd587d1&t=1554281595',
        '橱柜': {
          '橱柜': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/橱柜/ambry2.jpg?sign=4a6080e08086cba2f6b290d03dd587d1&t=1554281595',
            isCustom: false
          }
        }
      },
      '护墙板系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/护墙板/chair_rail.jpg?sign=7fc8a8e75479056714f6fea3902ae971&t=1554281860',
        '护墙板': {
          '护墙板': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/护墙板/chair_rail.jpg?sign=7fc8a8e75479056714f6fea3902ae971&t=1554281860',
            isCustom: false
          }
        }
      },
      '背景墙系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/背景墙/background_wall2.jpeg?sign=1fa1f3b904c694148f8b2588896ee1ee&t=1554282049',
        '背景墙': {
          '背景墙': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/背景墙/background_wall2.jpeg?sign=1fa1f3b904c694148f8b2588896ee1ee&t=1554282049',
            isCustom: false
          }
        },
      },
      '楼梯系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/扶手梯/escalator.jpg?sign=16bbec7811ea3a687ce31eb48c4bdb9d&t=1554282338',
        '扶手梯': {
          '扶手梯': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/扶手梯/escalator.jpg?sign=16bbec7811ea3a687ce31eb48c4bdb9d&t=1554282338',
            isCustom: false
          },
          '扶手梯1': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/扶手梯/escalator2.jpg?sign=83b4dcb28389c105fffdf35a19bc6504&t=1554282359',
            isCustom: false
          }
        }
      },
      '地板系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/地板/floor3.jpeg?sign=e2eeb05c4b794711b2146483e296014c&t=1554282450',
        '红木地板': {
          '地板': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/地板/floor3.jpeg?sign=e2eeb05c4b794711b2146483e296014c&t=1554282450',
            isCustom: false
          }
        }
      },
      '门系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/门/door2.jpg?sign=5a39f51dbace6608cee017a5debcd3f5&t=1554282540',
        '室内门': {
          '门': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/门/door2.jpg?sign=5a39f51dbace6608cee017a5debcd3f5&t=1554282540',
            isCustom: false
          }
        },
        '木门': {
          '推拉门': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/门/push_and_pull_door.jpg?sign=41edee64b8c3064b1bc029695d1d54aa&t=1554282561',
            isCustom: false
          },
        }
      },
      '天花系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/天花/ceiling3.jpeg?sign=413b28935d41ea15a935850b89272c30&t=1554282698',
        '天花板': {
          '天花板': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/天花/ceiling3.jpeg?sign=413b28935d41ea15a935850b89272c30&t=1554282698',
            isCustom: false
          },
        },
        '吊顶': {
          '吊顶': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/天花/sub_ceiling.jpg?sign=f1d411afd7b45113f47af840d1c9c9d4&t=1554282714'
          }
        }
      },
      '柜子系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/chest.jpg?sign=aafea0701c432ac618ce2b554c33b33a&t=1554282827',
        '衣柜': {
          '衣柜': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/chest.jpg?sign=aafea0701c432ac618ce2b554c33b33a&t=1554282827',
            isCustom: false
          }
        },
        '电视柜': {
          '电视柜': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/tv_bench.jpeg?sign=af7e7d0d4fb35fb3943e3f05b8893192&t=1554282862',
            isCustom: false
          },
          '电视柜2': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/tv_bench2.jpeg?sign=25941fb0139454ea502f25204fd7b5dd&t=1554282883',
            isCustom: false
          }
        },
        '定制衣柜': {
          '定制衣柜': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/custom_chest.jpg?sign=5c1cdd05e0fb1101543a6e5dadc47fa3&t=1554282994',
            isCustom: false
          },
          '定做博古架': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/custom_shelves.jpg?sign=fd440ab04cad00d79f07657d26f2c274&t=1554283010',
            isCustom: false
          },
          '衣柜柜身': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/chest_body.jpg?sign=a2c7938aa697270b8004e00bbc2245cc&t=1554282960',
            isCustom: false
          },
          '整体衣柜': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/custom_chest2.jpg?sign=cb644b84ab1eb347e095a934491c3038&t=1554282977',
            isCustom: false
          },
        },
        '定制酒柜': {
          '定做酒柜': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/wine_cabinet.jpeg?sign=4f0039544012d3eff48b5559f781c117&t=1554283030',
            isCustom: false
          },
        }
      },
      '地脚线系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/地脚线/foot_margin_line.jpg?sign=1ac1e8152ec790bcca987afae449b335&t=1554283075',
        '地脚线': {
          '地脚线': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/地脚线/foot_margin_line.jpg?sign=1ac1e8152ec790bcca987afae449b335&t=1554283075',
            isCustom: false
          }
        }
      },
      '隔断系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/隔断/screen.jpeg?sign=ba34d12a4f9485ed0899f78e018b5be3&t=1554283119',
        '屏风': {
          '屏风': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/隔断/screen.jpeg?sign=ba34d12a4f9485ed0899f78e018b5be3&t=1554283119',
            isCustom: false
          }
        }
      },
      '套房系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/套房/cover_image.jpeg?sign=0a3b0bf8bd9878986da49f72473e906f&t=1554283178',
        '套房': {
          '套房': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/套房/cover_image.jpeg?sign=0a3b0bf8bd9878986da49f72473e906f&t=1554283178',
            isCustom: false
          },
        }
      },
      '茶室景窗系列': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/套房/cover_image2.jpeg?sign=96007a1f2cdaadef25dd961fa5c08356&t=1554283195',
        '茶室': {
          '茶室': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/套房/cover_image2.jpeg?sign=96007a1f2cdaadef25dd961fa5c08356&t=1554283195',
            isCustom: false
          }
        }
      },
      '定制产品': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/定制产品/marble_pillar.jpg?sign=ae63cd30383339ab29066430d80d816f&t=1554283238',
        '定制产品': {
          '罗马柱': {
            url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/定制产品/marble_pillar.jpg?sign=ae63cd30383339ab29066430d80d816f&t=1554283238',
            isCustom: false
          },
        }
      },
    }
  },
  coverHidden(e) {
    this.setData({
      coverShow: true
    })
  },
  hideQRCode: function () {
    this.setData({
      coverQRCode: true
    })
  },
  showQRCode: function () {
    this.setData({
      coverQRCode: false
    })
  },
  getMainCategoryList: function () {
    let categoriesFirst = []
    let categoriesSecond = []
    let products = this.data.productsList
    for (let key in products) {
      if (products.hasOwnProperty(key)) {
        let item = {
          name: key || '',
          imgUrl: products[key].url || ''
        }
        categoriesFirst.length < 8 ?
          categoriesFirst.push(item) :
          categoriesSecond.push(item)
      }
    }
    this.setData({
      categoriesFirst: categoriesFirst,
      categoriesSecond: this.data.categoriesSecond.concat(categoriesSecond)
    })
  },
  getSecondCategory: function (event) {
    let name = event.currentTarget.dataset['name']
    let categorys = []
    for (let key in this.data.productsList) {
      if ((key == name)) {
        for (let category in this.data.productsList[key]) {
          if (category != 'url') {
            categorys.push(category)
          }
        }
      }
    }
    this.setData({
      categoryList: categorys
    })
  },
  getAllProducts: function () {
    let products = []
    for (let category in this.data.productsList) {
      for (let key in this.data.productsList[category]) {
        if (key !== 'url') {
          for (let productName in this.data.productsList[category][key]) {
            let product = {
              name: productName,
              ...this.data.productsList[category][key][productName]
            }
            products = products.concat(product)  
          }
        }
      }
    }
    this.setData({
      productList: products
    })
  },
  getSingleCategoryProducts: function (event) {
    let name = event.currentTarget.dataset['name']
    let products = []
    for (let category in this.data.productsList) {
      for (let key in this.data.productsList[category]) {
        if (name == key) {
          for (let productName in this.data.productsList[category][key]) {
            let product = {
              name: productName,
              ...this.data.productsList[category][key][productName]
            }
            products = products.concat(product)
          }
        }
      }
    }
    this.setData({
      productList: products
    })
  },
  // 轮播图指示点
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    });
  },
  previewImage: function (e) {
    wx.previewImage({
      urls: this.data.previewImg.url.split(',')
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错
    })
  },
  onLoad: function () {
    this.getAllProducts()
    this.getMainCategoryList()
  }
})