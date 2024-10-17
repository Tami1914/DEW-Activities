function filter(attractions, age, height) {
    //write your JS code here:
    if (!isNaN(attraction.minAge) && (age < attraction.minAge)) {
        return false;
    }

    if (!isNaN(attraction.maxAge) && (age > attraction.maxAge)) {
        return false;
    }

    if (!isNaN(attraction.minHeight) && (height < attraction.minHeight)) {
        return false;
    }

    if (!isNaN(attraction.maxHeight) && (height > attraction.maxHeight)) {
        return false;
    }


    return true;
}