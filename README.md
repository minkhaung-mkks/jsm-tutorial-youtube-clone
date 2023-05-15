
# 🎬 YouTube Clone Project 

This is a clone tutorial project from [JS-Mastery](https://www.youtube.com/@javascriptmastery). You can view the tutorial [here](https://www.youtube.com/watch?v=FHTbsZEJspU).

Deployed on : [Netlify](https://gorgeous-fenglisu-921aca.netlify.app/)

## 🚀 Enhancements

Here are some of the key enhancements I made to the original project:

- 📝 **Comment Section**: Introduced a fully functional comment section.
- 🐞 **Visual Error Fix**: Rectified a visual error that was creating gaps in the video cards when playlist data was fetched.
- 💅 **CSS Modifications**: Updated the CSS for a more fluid and responsive layout.

## 📢 Comment Section Component

The Comment Section component is a significant feature addition. Here's a brief overview of how it works:

- It accepts an `id` prop, which corresponds to a particular video.
- This `id` is used to fetch comments for the video from the RapidAPI endpoint.
- The fetched comments are then sorted based on the `likeCount`.

```javascript
useEffect(() => {
  fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
    .then((data) => {
      const sortedComments = data.items.sort((a, b) => {
        return b.snippet.topLevelComment.snippet.likeCount - a.snippet.topLevelComment.snippet.likeCount;
      });
      setComments(sortedComments);
    });
}, [id]);
```

### 👀 Visibility on Mobile View

The comments are hidden by default on mobile view. They only become visible when the user clicks on the comment button.

```javascript
{(isExpanded || !isMobile) && (
  //... Comment rendering logic
)}
```

The application checks the screen size upon rendering to determine whether the user is on a mobile device.

```javascript
useEffect(() => {
  if (window.innerWidth >= 960) {
    setIsMobile(false);
    setIsExpanded(true);
  }
}, []);
```

### 📱 Responsive Design

The css units are changed to vw and vh in fitting cases to make the app look and behave the same across all devices of similar screen sizes.


# 🎓 Conclusion

This project has been a significant step in my learning journey. Here are some of my takeaways:

## 🧩 Discovering Material UI

This was my first exposure to Material UI, and I was amazed by its power and flexibility. Comparing how Material UI handles CSS versus my approach was enlightening. It also marked my first introduction to a UI library, which was exciting for me.

## 🎯 Understanding API Endpoints

The API endpoints used in this project were intuitive and straightforward, providing excellent insight into how I might build my own in the future. I'm excited to delve deeper into API development and create my own endpoints soon.

## 🐞 Debugging and Improvement

Finding and fixing bugs like the playlist glitch was a thrilling experience. Enhancing and iterating on the original tutorial, adding my touch to aspects like the CSS, was incredibly satisfying.

## 💬 Implementing Comments

Incorporating a comments section was simpler than expected, a fact that speaks volumes about JS-Mastery's effective teaching methods.

## 🚀 What's Next?

While I've learned a lot, I realize there's more to master. I plan to undertake 2-3 more tutorial projects to solidify my understanding before launching into independent projects. The journey thus far has been enriching, and I can't wait to see where it takes me next.

---

I'm always open to feedback and suggestions. If you have any advice or would like to share your thoughts, please feel free to reach me at [minkhaung.mkks@gmail.com](mailto:minkhaung.mkks@gmail.com).
