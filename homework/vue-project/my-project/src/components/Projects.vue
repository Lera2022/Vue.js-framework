<template>
<ul>
  <li @click="setType(0)">Bathroom</li>
  <li @click="setType(1)">Bed Room</li>
  <li @click="setType(2)">Kitchan</li>
  <li @click="setType(3)">Living Area</li>
</ul>
<div class="articles__wrapper">
                    <div v-for=" type in types ">
                        <div>
                            <img :src="type[number].url" :alt="type[number].alt" class="img__article">
                            <h3 class="subheading subheading__article ">{{type[number].subheading}}
                            </h3>
                            <div class="article__wrapper ">
                                <p class="date ">{{type[number].date}}</p>
                                <a href="blog-details.html">
                                    <img src="../assets/arrow.svg" alt="arrow " class="arrow__article ">
                                </a>
                            </div>
                        </div>
                    </div>
</div>
</template>

<script>

export default {
  name: 'Projects',
  
  data() {
    return {
    number: 0,
    type: [
              bedroom: [{
                url: '../assets/bedroom1.jpg',
                alt: 'Bedroom Design',
                subheading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            },
            {
                url: '../assets/bedroom1.jpg',
                alt: 'Bedroom Design',
                subheading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            },
            {
                url: '../assets/bedroom1.jpg',
                alt: 'Bedroom Design',
                subheading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            },
            {
                url: '../assets/bedroom1.jpg',
                alt: 'Bedroom Design',
                subheading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            }
        ],
                      bathroom: [{
                url: '../assets/bathroom1.jpg',
                alt: 'Bathroom Design',
                subheading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            },
            {
                url: '../assets/bathroom1.jpg',
                alt: 'Bathroom Design',
                subheading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            },
            {
                url: '../assets/bathroom1.jpg',
                alt: 'Bathroom Design',
                subheading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            },
            {
                url: '../assets/bathroom1.jpg',
                alt: 'Bathroom Design',
                subheading: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022',
            }
        ]
        ]
    };
  },

  mounted() {
    
  },

  methods: {
    setType(Number) {
      number = Number
    }
  },
};
</script>

<style lang="scss" scoped>

</style>