import Dialog from '../../components/vant_dist/dialog/dialog';

Page({

  data: {
    productDetail: {},
    onlyImg: {},
    show: {
      bottom: false,
    },
    materialList: [],
    materialName: '红花梨',
    material: [
      {
        name: '红花梨',
        price: 3874
      },
      {
        name: '红高棉',
        price: 5850
      },
      {
        name: '刺猬紫檀',
        price: 9100
      },
      {
        name: '缅花',
        price: 18200
      },
      {
        name: '阔叶黄檀',
        price: 20800
      },
      {
        name: '伯利兹黄檀',
        price: 23400
      },
      {
        name: '巴厘黄檀',
        price: 33800
      },
      {
        name: '微凹黄檀',
        price: 78000
      },
      {
        name: '交趾黄檀',
        price: 111800
      },
      {
        name: '缅甸柚木',
        price: 16900
      },
      {
        name: '香花梨',
        price: 9100
      },
      {
        name: '格木',
        price: 7800
      },
    ],
    productsList: {
      '橱柜': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/橱柜/ambry2.jpg?sign=4a6080e08086cba2f6b290d03dd587d1&t=1554281595',
        isCustom: false,
        width: '3~20',
      },
      '护墙板': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/护墙板/chair_rail.jpg?sign=7fc8a8e75479056714f6fea3902ae971&t=1554281860',
        isCustom: false,
        width: '1~20',
        height: '1~5',
      },
      '背景墙': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/背景墙/background_wall2.jpeg?sign=1fa1f3b904c694148f8b2588896ee1ee&t=1554282049',
        isCustom: false,
        width: '1~20',
        height: '1~5'
      },
      '扶手梯': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/扶手梯/escalator.jpg?sign=16bbec7811ea3a687ce31eb48c4bdb9d&t=1554282338',
        isCustom: false,
        width: '1~1.8',
        long: '1~60',
      },
      '扶手梯1': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/扶手梯/escalator2.jpg?sign=83b4dcb28389c105fffdf35a19bc6504&t=1554282359',
        isCustom: false,
        width: '1~1.8',
        long: '1~60',
      },
      '地板': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/地板/floor3.jpeg?sign=e2eeb05c4b794711b2146483e296014c&t=1554282450',
        isCustom: true,
      },
      '门': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/门/door2.jpg?sign=5a39f51dbace6608cee017a5debcd3f5&t=1554282540',
        isCustom: true
      },
      '推拉门': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/门/push_and_pull_door.jpg?sign=41edee64b8c3064b1bc029695d1d54aa&t=1554282561',
        isCustom: false,
        width: '1~10',
        height: '2~6'
      },
      '天花板': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/天花/ceiling3.jpeg?sign=413b28935d41ea15a935850b89272c30&t=1554282698',
        isCustom: false,
        permiter: '5~60'
      },
      '吊顶': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/天花/sub_ceiling.jpg?sign=f1d411afd7b45113f47af840d1c9c9d4&t=1554282714',
        isCustom: false,
        width: '1~35',
        long: '1~40'
      },
      '电视柜': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/tv_bench.jpeg?sign=af7e7d0d4fb35fb3943e3f05b8893192&t=1554282862',
        isCustom: false,
        width: '2~3',
        height: '1~15'
      },
      '电视柜2': {
        url: 'https://7465-test-8ad8df-1258960296.tcb.qcloud.la/products_images/电视柜/tv_bench2.jpeg?sign=8b98ad15a78c89e2f5e145fd188b8863&t=1554261636',
        isCustom: false,
        width: '2~3',
        height: '1~15'
      },
      '定制衣柜': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/custom_chest.jpg?sign=5c1cdd05e0fb1101543a6e5dadc47fa3&t=1554282994',
        isCustom: false,
        width: '2~3',
        height: '1~15'
      },
      '定做博古架': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/custom_shelves.jpg?sign=fd440ab04cad00d79f07657d26f2c274&t=1554283010',
        isCustom: false
      },
      '衣柜柜身': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/chest_body.jpg?sign=a2c7938aa697270b8004e00bbc2245cc&t=1554282960',
        isCustom: false,
        width: '2~3',
        height: '1~15'
      },
      '整体衣柜': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/custom_chest2.jpg?sign=cb644b84ab1eb347e095a934491c3038&t=1554282977',
        isCustom: false,
        width: '2~3',
        height: '1~15'
      },
      '定做酒柜': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/柜子/wine_cabinet.jpeg?sign=4f0039544012d3eff48b5559f781c117&t=1554283030',
        isCustom: false,
        width: '2~3',
        height: '1~15'
      },
      '地脚线': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/地脚线/foot_margin_line.jpg?sign=1ac1e8152ec790bcca987afae449b335&t=1554283075',
        isCustom: true
      },
      '屏风': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/隔断/screen.jpeg?sign=ba34d12a4f9485ed0899f78e018b5be3&t=1554283119',
        isCustom: true
      },
      '罗马柱': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/定制产品/marble_pillar.jpg?sign=ae63cd30383339ab29066430d80d816f&t=1554283238',
        isCustom: true
      },
      '茶室': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/套房/cover_image2.jpeg?sign=96007a1f2cdaadef25dd961fa5c08356&t=1554283195',
        isCustom: true
      },
      '套房': {
        url: 'https://6474-dtt-9da6e8-1258963284.tcb.qcloud.la/products/套房/cover_image.jpeg?sign=0a3b0bf8bd9878986da49f72473e906f&t=1554283178',
        isCustom: true
      },
    }
  },
  onLoad: function (options) {
    let name = options.name || ''
    // console.log(name)
    // console.log(name.indexOf('套房'))
    // console.log((name.indexOf('套房') != -1))
    if (name.indexOf('套房') != -1) {
      let productDetail = this.getProductDetail(name)
      this.setData({
        onlyImg: {
          name: name,
          url: productDetail.detail.url || ''
        }
      })
      return
    }
    if (options.url) {
      this.setData({
        onlyImg: {
          name: name,
          url: options.url || ''
        }
      })
      return
    }
    let productDetail = this.getProductDetail(name)
    this.setData({
      productDetail: productDetail,
      materialList: this.getMaterialList(),
    })
  },
  getMaterialList: function() {
    let materialList = []
    this.data.material.forEach(item => {
      materialList.push(item.name)
    })
    return materialList
  },
  submit: function (event) {
    let data = event.detail.value
    let width = parseFloat(data.width) || 1
    let height = parseFloat((data.height)) || 1
    let long = parseFloat((data.long)) || 1
    let materialName = this.data.materialName
    let price = 0
    this.data.material.find(function (item) {
      price = item.name == materialName
      ? item.price
      : price
    })
    let amount = (width * height * long * price).toFixed(2)
    this.showAmount(amount)
  },
  getProductDetail: function (name) {
    let productDetail = {}
    for (let key in this.data.productsList) {
      if (this.data.productsList.hasOwnProperty(key) && (key == name)) {
        productDetail = {
          name: key,
          detail: this.data.productsList[key] || {}
        }
      }
    }
    return productDetail
  },
  // 上拉窗口隐藏显示
  toggle: function(type) {
    this.setData({
      [`show.${type}`]: !this.data.show[type]
    })
  },
  // 上拉弹出
  toggleBottomPopup: function() {
    this.toggle('bottom');
  },
  getMaterial: function(event) {
    const name = event.detail.value
    this.setData({
      materialName: name
    })
    this.toggle('bottom');
  },
  // 点取消
  onCancel: function() {
    // Toast('取消');
    this.toggle('bottom');
  },
  showAmount: function(amount) {
    Dialog.alert({
      title: '总价',
      message: amount + '元\n联系人许先生:13802656493',
    });
  }
})