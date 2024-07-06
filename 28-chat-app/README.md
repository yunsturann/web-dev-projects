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

# vite env file usage

- apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

# arrayUnion

- array union allows us to add a new element to an array without duplicating it

      await updateDoc(doc(userChatsRef, user.id),{
        chats: arrayUnion({
          chatId: newChatRef.id,
        })
      })

# arrayRemove

      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });

# serverTimestamp()

- serverTimestamp allows us to get the current time from the firebase server
- doesnt work with arrayUnion

  await setDoc(newChatRef, {
  createdAt: serverTimestamp(),
  messages: [],
  });

# if imgUrl is null, it will not be added to the object.

      {
        senderId: currentUser.id,
        text,
        createdAt: new Date(),
        ...(imgUrl && { img: imgUrl }),
      }
