export interface Song {
    title: string;
    cover: string;
    description: string;
    singer: string;
    path: string; // Add the song's path for playing the song
  }
  
  export interface Playlist {
    title: string;
    cover: string;
    description: string;
    songs: Song[];
  }
  
  export const playlists: Playlist[] = [
    {
      title: 'Bollywood Mix',
      cover: '/cover/cover1.jpg',
      description: 'A great playlist with a variety of songs.',
      songs: [
        {
          title: 'Bar Bar Din Ye Aaye Tum Jio Hazaro Saal',
          cover: '/images/Bar Bar Din Ye Aaye Tum Jio Hazaro Saal.jpeg',
          description: 'A high-energy pop track.',
          singer: 'Mohammed Rafi',
          path: '/songs/Bar Bar Din Ye Aaye Tum Jio Hazaro Saal.mp3', // Add the song's file path
        },
        {
          title: 'Bekhayali Mein Bhi Tera Hi Khayal Aaye',
          cover: '/images/Bekhayali Mein Bhi Tera Hi Khayal Aaye_64-(PagalWorld).jpeg',
          description: 'A soulful ballad.',
          singer: 'Sachet Tandon',
          path: '   /songs/Bekhayali Mein Bhi Tera Hi Khayal Aaye_64-(PagalWorld).mp3',
        },
        {
          title: 'Ghungroo',
          cover: '/images/Ghungroo_64-(PagalWorld).jpeg',
          description: 'An upbeat dance anthem.',
          singer: 'Shilpa Rao, Arijit Singh',
          path: '/songs/Ghungroo_64-(PagalWorld).mp3',
        },
        {
          title: 'Hookah Bar',
          cover: '/images/Hookah Bar_64-(PagalWorld).jpeg',
          description: 'A mellow jazz tune.',
          singer: 'Vinit Singh, Aaman Trikha, Himesh Reshammiya',
          path: '/songs/Hookah Bar_64-(PagalWorld).mp3',
        },
        {
            title: 'Itti Si Hasi',
            cover: '/images/Itti Si Hasi_64-(PagalWorld).jpeg',
            description: 'Mellow beats perfect for relaxation.',
            singer: 'Shreya Ghoshal',
            path: '/songs/Itti Si Hasi_64-(PagalWorld).mp3',
          },
        {
            title: 'Khamoshiyan',
            cover: '/images/Khamoshiyan_64-(PagalWorld).jpeg',
            description: 'Mellow beats perfect for relaxation.',
            singer: 'Arijit Singh',
            path: '/songs/Khamoshiyan_64-(PagalWorld).mp3',
          },
        {
            title: 'Lungi Dance',
            cover: '/images/Lungi Dance_64-(PagalWorld).jpeg',
            description: 'Mellow beats perfect for relaxation.',
            singer: 'Yo Yo Honey Singh',
            path: '/songs/Lungi Dance_64-(PagalWorld).mp3',
          },
        {
            title: 'Main Tenu Samjhawan Ki',
            cover: '/images/Main Tenu Samjhawan Ki_64-(PagalWorld).jpeg',
            description: 'Mellow beats perfect for relaxation.',
            singer: 'Sangeeta Bhageloe',
            path: '/songs/Main Tenu Samjhawan Ki_64-(PagalWorld).mp3',
          },
        {
            title: 'Mere Rashke Qamar',
            cover: '/images/Mere Rashke Qamar_64-(PagalWorld).jpeg',
            description: 'Mellow beats perfect for relaxation.',
            singer: 'Nusrat Fateh Ali Khan',
            path: '/songs/Mere Rashke Qamar_64-(PagalWorld).mp3',
          },
        {
            title: 'O Saki Saki',
            cover: '/images/O Saki Saki_64-(PagalWorld).jpeg',
            description: 'Mellow beats perfect for relaxation.',
            singer: 'Neha Kakkar, Tulsi Kumar, Vishal–Shekhar, Tanishk Bagchi, B Praak',
            path: '/songs/O Saki Saki_64-(PagalWorld).mp3',
          },
        {
            title: 'Aashiq Banaya Aapne',
            cover: '/images/Aashiq Banaya Aapne_64-(PagalWorld).jpeg',
            description: 'Mellow beats perfect for relaxation.',
            singer: 'Himesh Reshammiya',
            path: '/songs/Aashiq Banaya Aapne_64-(PagalWorld).mp3',
          },
        {
            title: 'Ae Dil Hai Mushkil',
            cover: '/images/Ae Dil Hai Mushkil_64-(PagalWorld).jpeg',
            description: 'Mellow beats perfect for relaxation.',
            singer: 'Pritam, Arijit Singh',
            path: '/songs/Ae Dil Hai Mushkil_64-(PagalWorld).mp3',
          },
      ],
    },
    {
      title: 'Top 5',
      cover: '/cover/cover2.jpg',
      description: 'Indie vibes for your weekend.',
      songs: [
        {
          title: 'Agar Tum Saath Ho',
          cover: '/images/Agar Tum Saath Ho_64-(PagalWorld).jpeg',
          description: 'Indie folk with beautiful guitar.',
          singer: 'Arijit Singh, Alka Yagnik',
          path: '/songs/Agar Tum Saath Ho_64-(PagalWorld).mp3',
        },
        {
          title: 'Baatein Ye Kabhi Na Tu Bhulna',
          cover: '/images/Baatein Ye Kabhi Na Tu Bhulna_64-(PagalWorld).jpeg',
          description: 'Catchy indie pop track.',
          singer: 'Jeet Gannguli, Arijit Singh.',
          path: '/songs/Baatein Ye Kabhi Na Tu Bhulna_64-(PagalWorld).mp3',
        },
        {
          title: 'Banke Titli Dil Uda',
          cover: '/images/Banke Titli Dil Uda_64-(PagalWorld).jpeg',
          description: 'Relaxing acoustic vibe.',
          singer: 'Singer 7',
          path: '/songs/Banke Titli Dil Uda_64-(PagalWorld).mp3',
        },
        {
          title: 'Sawar Lu',
          cover: '/images/Sawar Lu_64-(PagalWorld).jpeg',
          description: 'Melodic indie with a twist.',
          singer: 'Monali Thakur, Amit Trivedi, Amitabh Bhattacharya',
          path: '/songs/Sawar Lu_64-(PagalWorld).mp3',
        },
        {
          title: 'Om Shanti Om',
          cover: '/images/Om Shanti Om_64-(PagalWorld).jpeg',
          description: 'Melodic indie with a twist.',
          singer: 'Monali Thakur, Amit Trivedi, Amitabh Bhattacharya',
          path: '/songs/Om Shanti Om_64-(PagalWorld).mp3',
        },
      ],
    },
    {
      title: 'Trending',
      cover: '/cover/cover3.jpg',
      description: 'Chill out with these smooth beats.',
      songs: [
        {
          title: 'Song 9',
          cover: '/path/to/song9-cover.jpg',
          description: 'Chill beats with soft vocals.',
          singer: 'Singer 9',
          path: '/path/to/song9.mp3',
        },
        {
          title: 'Song 10',
          cover: '/path/to/song10-cover.jpg',
          description: 'Electronic beats with a relaxing vibe.',
          singer: 'Singer 10',
          path: '/path/to/song10.mp3',
        },
        {
          title: 'Song 11',
          cover: '/path/to/song11-cover.jpg',
          description: 'Ambient instrumental sounds.',
          singer: 'Singer 11',
          path: '/path/to/song11.mp3',
        },
        {
          title: 'Song 12',
          cover: '/path/to/song12-cover.jpg',
          description: 'Mellow beats perfect for relaxation.',
          singer: 'Singer 12',
          path: '/path/to/song12.mp3',
        },
        {
          title: 'Song 12',
          cover: '/path/to/song12-cover.jpg',
          description: 'Mellow beats perfect for relaxation.',
          singer: 'Singer 12',
          path: '/path/to/song12.mp3',
        },
      ],
    },
  ];
  