<template>
    <div v-if="selectedPictures.length > 0">
        <div class="picture-container" v-for="picture in selectedPictures" :key="picture.id">
            <img :src="picture.image" />
            <div class="details-wrap">
                <h3>{{ picture.name }}</h3>
            </div>
            <button class="remove-button">Remove from selection</button>
        </div>
    </div>
    <div v-if="selectedPictures.length === 0">
        You current have no pictures in your selection!
    </div>
</template>

<script>
export default {
    name:"SelectedPicturesList",
    props: ['selectedPictures'],
}

</script>