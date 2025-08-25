const staff = [
  { 
    id: 'Yassine', 
    name: 'Yassine', 
    avatar: '/staff/Yassine.png',
    role: 'Barista',
    bio: 'The creative mind behind our unique coffee experiences. Yassine designs innovative drinks and creates the aesthetic vision that makes Socks Coffee special.',
    videos: [
      '/videos/Yassine/Yassine.mp4',
      '/videos/Yassine/Yassine2.mp4',
    ]
  },
  { 
    id: 'Yehia', 
    name: 'Yehia', 
    avatar: '/staff/Yehia.png',
    role: 'Creative Director',
    bio: 'The creative mind behind our unique coffee experiences. Yehia designs innovative drinks and creates the aesthetic vision that makes Socks Coffee special.',
    videos: [
      '/videos/Yehia/AQMskowpJAFq0ZLfaEBTaMDLtkXSXfESPVWN29Ygu5FjUZ6v6wZrs_J3ZJZyTSOOA6p1L_s1RUyRG4VcyeVOAtWgamaEgD3w9a5F-S8.mp4',
      '/videos/Yehia/AQMTTJ-Daz3vVU_83LaTWYGUUJI4wNd6LJ0xdcP6Rziq0Zx1jTrVTweWsM33e8YT6zVAvsCSuCUlGRrZ0tVrPK0hHAbZLJ86DwWu2LQ.mp4',
      '/videos/Yehia/AQNTVP30VzunRKl308Wp1PVQ5nN7Equ9UkgkpQxKjFzp5J31zzLDqb5JRS6sze1chEYS2_sBQ3dPb01ILdXVcelOzIDVmhzbNGSKm5Y.mp4',
      '/videos/Yehia/AQNw3N4HQuED-AGDQukaNMrvlB0yuEQGCD836pHcVEl-2AxvEZsftM0kATyNfMYn8BkXh_PYnkKU5qZ70XpnC6oKMVnRcojZ3-i5aww.mp4',
      '/videos/Yehia/AQNzUfeMgogLr5r4itiqR-TTpyKucizUW-k_PjM_S6g-s3bpgIh4NHIe_oeyxtwfymmuhPbZVD8N9gipyVDs5DX6IXQZLeDa1_KcahA.mp4',
      '/videos/Yehia/AQOMNZhHVVEqd60HHAhrwnde3DsoLzB7ehMXjwp2sMXKKSIa7nF3SxSFeZKqY3w3AX2iPw0x4zvStb8PImMCTRuz2hShg32bdc4wLP4.mp4',
      '/videos/Yehia/AQOULS-aeFyg_lXrIs6prdUPtIJ-Y3i_my1FjdlsubhDu7p6rUb2eVxFabgkIB_qO-TaB8lekxrsabmrV8ru9rI6NWRcaWm1WIpeV6I.mp4',
      '/videos/Yehia/AQOZouFyx1am7BsggaP7Xf2Ab6f88jsy7a38PrD_qmjbpHtv48IH5qYxmblSrA6Ec35JtWZpNFWeMdjwCrTRnYdmMsiiTxIzpeRlzOE.mp4',
      '/videos/Yehia/AQPlkUeELUQORVBY5rM0cajrJN8J6HcF45Htr_Gaub9J5tq18qTZ2Scy7zkgjg1SAKrpCwqZ97OpEVQKTxGKrS-fkwvKGkBoWUkg9T0.mp4'
    ]
  },
  { 
    id: 'Youssef-Khalid', 
    name: 'Youssef Khalid', 
    avatar: '/staff/Youssef Khalid.png',
    role: 'Operations Manager',
    bio: 'Ensuring smooth operations and exceptional customer service. Youssef Khalid manages the day-to-day operations with efficiency and a warm smile.',
    videos: [
      '/videos/Youssef Khalid/AQM8WTZzBH6w3krmL4X0NvIj5ivoUlz9zdAqQ3TVTrWWR0xYFgFPh663X9HgF0IceGufewXhdoxUvsyf1KegY2wIKgjzlPSndTlFEdM.mp4',
      '/videos/Youssef Khalid/AQNTVP30VzunRKl308Wp1PVQ5nN7Equ9UkgkpQxKjFzp5J31zzLDqb5JRS6sze1chEYS2_sBQ3dPb01ILdXVcelOzIDVmhzbNGSKm5Y.mp4',
      '/videos/Youssef Khalid/AQOoOCIu3xg_SW0zHcWvaLSLx-4h2AGckQJxls7suOBU6kWieG0nV0bPBoHzqQkvwNSjv4FnE8Ie85dItDreQYoMXLFytB8myIX_-Yw.mp4',
      '/videos/Youssef Khalid/AQPBJ3lxaeU4-6QYmK889UO_I4DwICqWHbpkUEj1pCB5ydc4-sbwqSK7rEI7isHjbvMQmMWyluKC9ZLpXB7Tk1G_NSwl4DZclKBnpv8.mp4',
      '/videos/Youssef Khalid/AQPGglG5uNoAf0PaMpS_ZOr820YnObIcMljMp8y-PWcWN776MYKVYSk-5z-K1mKWBgkVNz0lO-YZNMe-IMMQOuUtHdm8AWoPrRYdbcY.mp4'
    ]
  },
  { 
    id: 'Rahma', 
    name: 'Rahma', 
    avatar: '/staff/Rahma.png',
    role: 'Pastry Chef',
    bio: 'Creating delightful pastries and desserts that perfectly complement our coffee. Rahma\'s creations are as beautiful as they are delicious.',
    videos: [
      '/videos/Rahma/AQOMoy2qTB3GuPbKHGZAgELwz2Rct5rFPbf3GxiEt2anvvq32fXq65KorlbhdCLCqonvkkmguyvUcCjwjgl4EPzli3rGeJlAMZkQQ_E.mp4',
      '/videos/Rahma/AQP3mW1aUoR9WcE67Bm8gvIXKPtJWq79COMaYHqZMru8QrmIv3xcTQe0eDC-TWtyG1nTopzgXhgRPRqQo6WwlQ7GTKsBlQY2XzE8vD8.mp4',
      '/videos/Rahma/AQPsLaqfIkRxy8aFRmWfRIJvkKCZcMnpbeqvzxqyWpq6AGwxUgUdtJWvgkFUfBzhq8-SK9Zylwfrb7uxqXS6c3DZaS45KA8-tl1Wy2E.mp4',
      '/videos/Rahma/socks.coffee_7530001555836226823.mp4'
    ]
  },
  { 
    id: 'Youssef-Medhat', 
    name: 'Youssef Medhat', 
    avatar: '/staff/Youssef Medhat.png',
    role: 'Marketing Lead',
    bio: 'The storyteller behind Socks Coffee\'s brand. Youssef Medhat captures our moments and shares our passion with the world through creative content.',
    videos: [
      '/videos/Youssef Medhat/AQNufyr7xVTwV_s88KZRFZ-dhipyPMuuTvyjRsfC4PM2fX4bVPPGKeADjE-4x7bIOG2KMstTWQWW6REBGNmuIwXLIbo9wILZdnXyb6E.mp4',
      '/videos/Youssef Medhat/AQPflAnbh6DKWWr8lUvj332X3zBx05zHMFXaSAU2hclUtDLKnmEW21OfVmobKdJp_ahIAKAZZhip4RSEWb3A21W-TjGeMIcCIacUGr0.mp4'
    ]
  },
  { 
    id: 'Asmaa', 
    name: 'Asmaa', 
    avatar: '/staff/Asmaa.png',
    role: 'Customer Experience',
    bio: 'The heart of our customer service. Asmaa ensures every guest feels welcomed and leaves with a smile, creating memorable experiences one cup at a time.',
    videos: [
      '/videos/Asmaa/AQM8O_kTKwZW6EcyYyb8KnUWA483Wdkr6rgluT60YsqVkDa1u20_-naMFc5RPXWY2lws6hI51XzbqcUKWHfRSrIs1xjCvWforrlVyXA.mp4',
      '/videos/Asmaa/AQPGglG5uNoAf0PaMpS_ZOr820YnObIcMljMp8y-PWcWN776MYKVYSk-5z-K1mKWBgkVNz0lO-YZNMe-IMMQOuUtHdm8AWoPrRYdbcY.mp4'
    ]
  },
  { 
    id: 'Roshdy', 
    name: 'Roshdy', 
    avatar: '/staff/Roshdy.png',
    role: 'Quality Control',
    bio: 'Our quality assurance expert. Roshdy ensures every drink meets our high standards, from bean selection to the final pour, maintaining excellence in every cup.',
    videos: [
      '/videos/Roshdy/AQNm724x9-cPwwDI9s57-2XLe_PWgKkP2fshleCU3nvj9h8HyUWeOMAukdAwlfv8vhrezPgOfC8uTd_AhCkAeQDu1zeXdILmu0jt1u8.mp4',
      '/videos/Roshdy/AQOAvoL758jpmVhhfDKffcd7B_6VzbSHLe5P_wHw7276fc2B_DcmEjkvLcQgdIOOjgSN29FlMDy3ArP7b6lAUpRV8-yKBSW0Ez79fZk.mp4'
    ]
  },
  { 
    id: 'Marawan', 
    name: 'Marawan', 
    avatar: '/staff/Marawan.png',
    role: 'Quality Control',
    bio: 'Our quality assurance expert. Marawan ensures every drink meets our high standards, from bean selection to the final pour, maintaining excellence in every cup.',
    videos: [
      'videos/Marawan/Marwan1.mp4',
      'videos/Marawan/Marwan2.mp4'
    ]
  }
]

export default staff;
