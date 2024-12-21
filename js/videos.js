const videos = [
  {
      title: "大白话说清楚AI科技发展和商业应用｜AI入门 1",
      image: "images/rumen1.jpeg",
      link: "https://www.douyin.com/user/MS4wLjABAAAAhyR2vsv8LfSJt9Wk0wNjYru-bmv6cT_hfxXAmL0nx6U?from_tab_name=main&modal_id=7343211331996192019"
  },
  {
      title: "新手玩转AI的优质资料｜AI入门 2",
      image: "images/rumen2.jpeg",
      link: "https://www.xiaohongshu.com/discovery/item/65e9a6c10000000003037db3?source=webshare&xhsshare=pc_web&xsec_token=ABkSi9k3JV0-mxfCC-G25ctURrfegYFpk5MIhHHBZ1q3Q=&xsec_source=pc_share"
  },
  {
      title: "好用的AI神器｜AI入门 3",
      image: "images/rumen3.jpeg",
      link: "https://www.xiaohongshu.com/discovery/item/65eafd3800000000040020da?source=webshare&xhsshare=pc_web&xsec_token=ABu5etRZAa3iRv-4y6VopL01qF_opDiw_BIkux0-sMYdI=&xsec_source=pc_share"
  },

  {
    title: " 大厂出品的AI工具｜AI入门 4",
    image: "images/rumen4.jpeg",
    link: "https://www.xiaohongshu.com/discovery/item/65ec4ec500000000030379a4?source=webshare&xhsshare=pc_web&xsec_token=AB4GZEtEgDqsP1Cjs8YRXmPYY2NhuJOvRIkugjZMHWLUE=&xsec_source=pc_share"
  },

  {
    title: "AI视频实用技巧｜AI入门 5",
    image: "images/rumen5.jpeg",
    link: "https://www.xiaohongshu.com/discovery/item/65ed9cf20000000012021452?source=webshare&xhsshare=pc_web&xsec_token=ABdfCSLtwmCOq5BR36K2nW2kI7Zr76rENun9Yvh7r8Ix8=&xsec_source=pc_share"
  },

  {
    title: "电商人在用的AI工具｜AI入门 6",
    image: "images/rumen6.jpeg",
    link: "https://www.xiaohongshu.com/discovery/item/65eeedf40000000012020435?source=webshare&xhsshare=pc_web&xsec_token=ABCqGd9ZxHJMLsw3TNqHgkq0pHx0PhlGy0kqv4yyI3Y8Q=&xsec_source=pc_share"
  },

  {
    title: "好用的AI写作工具｜AI入门 7",
    image: "images/rumen7.jpeg",
    link: "https://www.xiaohongshu.com/discovery/item/65f03cf40000000012020f40?source=webshare&xhsshare=pc_web&xsec_token=ABSsHjqtqVZL0v9uGs8JA53D0bZbOBNLEJKwvGfDMPQr0=&xsec_source=pc_share"
  },

  {
    title: " 优质的AI提示词｜AI入门 8",
    image: "images/rumen8.jpeg",
    link: "https://www.xiaohongshu.com/discovery/item/65f19f5a000000001203f539?source=webshare&xhsshare=pc_web&xsec_token=ABg4OUfGmWTwJ5VVWl4JNJ-5_CfGIXjtYc6BgjEG7CWU4=&xsec_source=pc_share"
  },

  {
    title: "AI绘画入门｜AI入门 9",
    image: "images/rumen9.jpeg",
    link: "https://www.xiaohongshu.com/discovery/item/65f3002f000000001202029c?source=webshare&xhsshare=pc_web&xsec_token=ABFru3sUgQEmyWXjfs5ufmBKKZAugFcb7z7DrwXYbSiKI=&xsec_source=pc_share"
  },

  {
    title: " 人工智能体简介｜AI入门 10",
    image: "images/rumen10.jpeg",
    link: "https://www.xiaohongshu.com/discovery/item/65f57e48000000000d00e4dd?source=webshare&xhsshare=pc_web&xsec_token=ABzXJzfv0w8PFN_jmrOwMzOt3m-siB2nTcAziTnMSSx6Y=&xsec_source=pc_share"
  },

  {
    title: "AI行业的一些术语｜AI入门 11",
    image: "images/rumen11.jpeg",
    link: "https://www.xiaohongshu.com/discovery/item/65f6d47e000000001203c795?source=webshare&xhsshare=pc_web&xsec_token=ABvh-0-AYKSd6PrJZgYx5RN-Gp2TqOTJCtRBSzXTWCMjo=&xsec_source=pc_share"
  },

];

const videoContainer = document.getElementById('video-container');
        videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.innerHTML = `
                <a href="${video.link}" target="_blank">
                    <img src="${video.image}" alt="${video.title}">
                </a>
                <div class="video-card-title">${video.title}</div>
            `;
            videoContainer.appendChild(videoCard);
        });