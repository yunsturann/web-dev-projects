# element.scrollIntoView({behavior: "smooth"})

# URL.createObjectURL(e.target.files[0])

- Geçici path oluşturur ve bu path'i kullanarak dosya önizlemesi yapabiliriz.

# nested css hover and & selector

.container{

    display: flex;

    button {

        padding: 10px 20px;
        background-color: rgba(230, 74, 105, 0.553);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background-color: rgba(230, 74, 105, 0.8);
        }

        &.logout {
            padding: 10px;
            background-color: #1a73e8;
        }
    }

}
