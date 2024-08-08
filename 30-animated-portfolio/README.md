## scrool-snap-type

<pre>
    html {
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
    }

    section {
        scroll-snap-align: center;
    }
</pre>

- this code will snap to the next element when scrolling vertically

## stroke

- stroke is the outline of a shape

<pre>
    .phoneSvg {
      stroke: orange;
    }

    <*svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
        <path strokeWidth={0.2} fill="none" d="M28.189,16" />
    </svg>
</pre>

## mousemove - MouseEvent

- mousemove event is triggered when the mouse pointer is moved over an element

- e.ClientX and e.ClientY are the coordinates of the mouse pointer when the mouse event was triggered
- the coordinates are relative to the viewport

- offsetX and offsetY are the coordinates of the mouse pointer when the mouse event was triggered
- the coordinates are relative to the target element

- pageX and pageY are the coordinates of the mouse pointer when the mouse event was triggered
- the coordinates are relative to the whole document

<pre>
    useEffect(() => {
        const mouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
        window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
</pre>

## scss responsiveness

1. create a mixin for media queries

   - <pre>
     @mixin mobile {
         @media (max-width: 738px) {
             @content; // this will be replaced by the content of the mixin 
         }
     }
     </pre>

2. use the mixin in the scss file with the @include directive

   - <pre>
      @import "../../app.scss";
      
        .button {
            @include mobile {
                display: none;
            }
        }
     </pre>

## Cancel framer motion animation with a css property

- transform: none !important; overwrites the transform property of the framer motion animation

    <pre>
        @include mobile {
            transform: none !important;
        }
    </pre>
