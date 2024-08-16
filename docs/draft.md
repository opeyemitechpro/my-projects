---
icon: simple/amazonwebservices
---

# AWS Projects


!!! warning

    This is a warning block


---


!!! attention

    This is an attention block


!!! info

    This is an attention block


!!! console

    This is an attention block


!!! example "Integrate with site navigation"

    Add the following to your `mkdocs.yml` to see how the Blog plugin can
    integrate the blog navigation with the overall navigation structure.
    Note that the only thing you need to specify at this point is the
    index page for the blog and its path must match the `blog_dir` setting,
    which is `blog` by default:

    ```yaml hl_lines="5 6"
    nav:
      - Home: index.md
      - Install: install.md
      - Usage: usage.md
      - Blog:
         - blog/index.md
    ```

    You will notice that "Blog" is duplicated in the navigation structure. To
    avoid this, you can use the `navigation.indexes` feature to make the blog
    index the seciton index page for the blog:

    ```yaml hl_lines="3 4"
    theme:
      name: material
      features:
        - navigation.indexes
    ```

!!! tip "Stand-alone blog"

    If what you need is a stand-alone blog instead of one that is integrated with
    a larger site, this can be done by using the `blog_dir` configuration option.
    To see how this is done, see [setting up a blog].
    The rest of the tutorial assumes that you are integrating the blog with
    a wider site.

[Setting up a blog]: ../../setup/setting-up-a-blog.md#blog-only

!!! tip "Adding pages"

    You can add additional pages to the blog section by putting them into
    `docs/blog` (and adding them to the navigation). The blog archive will be
    added to the navigation after these pages.


??? question "How to visualize the collected feedback ratings?"

    To visualize feedback ratings you'll need to create a custom report with
    [Google Analytics] that will quickly show you the worst- and best-rated
    pages of your project documentation.

    1.  Go to your Google Analytics __dashboard__

    2.  Go to the __configure__ page on the left hand menu, then select
        __custom definitions__

    3.  Click the __custom metrics__ tab and then __create custom metrics__,
        enter the following values:

        * Metric name: Page helpful
        * Description: Was this page helpful?
        * Event parameter: `data`
        * Unit of measurement: Standard

    4.  Go to the __explore__ page on the left hand menu, create a new
        __blank exploration__

    5.  Configure the report as follows:

        * Dimensions: Add `Event name` and `Page location`
        * Metrics: Add `Event count` and `Page helpful`
          (the custom metric created in step 3)
        * Rows: `Page location`
        * Values: Drag in both `Event count` and `Page helpful`
        * Filters: Add a new filter for
          `Event name / exactly matches / feedback`

    !!! warning "Delay in data availability"

        The report may take 24 hours or longer to begin displaying data

    Now, after you've saved the report and collected some feedback ratings,
    you'll have a list of all pages with the total number of ratings, and an
    average rating per page. This should help you identify pages that need to
    be improved:

    !!! danger "Google Analytics 4 does not support average values"

        To our knowledge, Google Analytics 4 has currently no feature that
        allows to define a custom calculated metric to compute the average
        rating of a page. See #5740.

    [![feedback report]][feedback report]


# Getting started

Material for MkDocs is a powerful documentation framework on top of [MkDocs],
a static site generator for project documentation.[^1] If you're familiar with
Python, you can install Material for MkDocs with [`pip`][pip], the Python
package manager. If not, we recommend using [`docker`][docker].

  [^1]:
    In 2016, Material for MkDocs started out as a simple theme for MkDocs, but
    over the course of several years, it's now much more than that – with the
    many built-in plugins, settings, and countless customization abilities,
    Material for MkDocs is now one of the simplest and most powerful frameworks
    for creating documentation for your project.

  [MkDocs]: https://www.mkdocs.org
  [pip]: #with-pip
  [docker]: #with-docker

## Installation

### with pip <small>recommended</small> { #with-pip data-toc-label="with pip" }

Material for MkDocs is published as a [Python package] and can be installed with
`pip`, ideally by using a [virtual environment]. Open up a terminal and install
Material for MkDocs with:

=== "Latest"

    ``` sh
    pip install mkdocs-material
    ```

=== "9.x"

    ``` sh
    pip install mkdocs-material=="9.*" # (1)!
    ```

    1.  Material for MkDocs uses [semantic versioning][^2], which is why it's a
        good idea to limit upgrades to the current major version.

        This will make sure that you don't accidentally [upgrade to the next
        major version], which may include breaking changes that silently corrupt
        your site. Additionally, you can use `pip freeze` to create a lockfile,
        so builds are reproducible at all times:

        ```
        pip freeze > requirements.txt
        ```

        Now, the lockfile can be used for installation:

        ```
        pip install -r requirements.txt
        ```

  [^2]:
    Note that improvements of existing features are sometimes released as
    patch releases, like for example improved rendering of content tabs, as
    they're not considered to be new features.

This will automatically install compatible versions of all dependencies:
[MkDocs], [Markdown], [Pygments] and [Python Markdown Extensions]. Material for
MkDocs always strives to support the latest versions, so there's no need to
install those packages separately.

---

:fontawesome-brands-youtube:{ style="color: #EE0F0F" }
__[How to set up Material for MkDocs]__ by @james-willett – :octicons-clock-24:
15m – Learn how to create and host a documentation site using Material for
MkDocs on GitHub Pages in a step-by-step guide.

  [How to set up Material for MkDocs]: https://www.youtube.com/watch?v=Q-YA_dA8C20

---

!!! tip

    If you don't have prior experience with Python, we recommend reading
    [Using Python's pip to Manage Your Projects' Dependencies], which is a
    really good introduction on the mechanics of Python package management and
    helps you troubleshoot if you run into errors.

  [Python package]: https://pypi.org/project/mkdocs-material/
  [virtual environment]: https://realpython.com/what-is-pip/#using-pip-in-a-python-virtual-environment
  [semantic versioning]: https://semver.org/
  [upgrade to the next major version]: upgrade.md
  [Markdown]: https://python-markdown.github.io/
  [Pygments]: https://pygments.org/
  [Python Markdown Extensions]: https://facelessuser.github.io/pymdown-extensions/
  [Using Python's pip to Manage Your Projects' Dependencies]: https://realpython.com/what-is-pip/

### with docker

The official [Docker image] is a great way to get up and running in a few
minutes, as it comes with all dependencies pre-installed. Open up a terminal
and pull the image with:

=== "Latest"

    ```
    docker pull squidfunk/mkdocs-material
    ```

=== "9.x"

    ```
    docker pull squidfunk/mkdocs-material:9
    ```

The `mkdocs` executable is provided as an entry point and `serve` is the
default command. If you're not familiar with Docker don't worry, we have you
covered in the following sections.

The following plugins are bundled with the Docker image:

- [mkdocs-minify-plugin]
- [mkdocs-redirects]

  [Docker image]: https://hub.docker.com/r/squidfunk/mkdocs-material/
  [mkdocs-minify-plugin]: https://github.com/byrnereese/mkdocs-minify-plugin
  [mkdocs-redirects]: https://github.com/datarobot/mkdocs-redirects


??? question "Green Bar colapsed"

    this is sample text


??? question "How to add plugins to the Docker image?"

    Material for MkDocs only bundles selected plugins in order to keep the size
    of the official image small. If the plugin you want to use is not included,
    you can add them easily:

    === "Material for MkDocs"

        Create a `Dockerfile` and extend the official image:

        ``` Dockerfile title="Dockerfile"
        FROM squidfunk/mkdocs-material
        RUN pip install mkdocs-macros-plugin
        RUN pip install mkdocs-glightbox
        ```

    === "Insiders"

        Clone or fork the Insiders repository, and create a file called
        `user-requirements.txt` in the root of the repository. Then, add the
        plugins that should be installed to the file, e.g.:

        ``` txt title="user-requirements.txt"
        mkdocs-macros-plugin
        mkdocs-glightbox
        ```

    Next, build the image with the following command:

    ```
    docker build -t squidfunk/mkdocs-material .
    ```

    The new image will have additional packages installed and can be used
    exactly like the official image.

### with git

Material for MkDocs can be directly used from [GitHub] by cloning the
repository into a subfolder of your project root which might be useful if you
want to use the very latest version:

```
git clone https://github.com/squidfunk/mkdocs-material.git
```

Next, install the theme and its dependencies with:

```
pip install -e mkdocs-material
```

  [GitHub]: https://github.com/squidfunk/mkdocs-material




---
icon: simple/terraform
---

# Terraform Page

## Terraform AWS


``` tf
resource "aws_instance" "Server" {
  ami           = "ami-0b8b44ec9a8f90422"
  instance_type = var.instance_type

  # key_name = "OpeyemiTechPro-KeyPair.ppk"
user_data = file("./userdata.sh")

  key_name = var.key_pair_name

  tags = {
    Name = "Server"
  }
}
```

This is page 2 contents

!!! note annotate "This is an annotation (1)"

    Lorem ipsum dolor sit amet, (2) consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

1.  :man_raising_hand: I'm an annotation!
2.  :woman_raising_hand: I'm an annotation as well!


``` py
import tensorflow as tf
def whatever()
```

## Code Annotation Examples

### Codeblocks

Some `code` goes here.

### Plain codeblock

A plain codeblock:

```
Some code here
def myfunction()
// some comment
```

#### Code for a specific language

Some more code with the `py` at the start:

``` py
import tensorflow as tf
def whatever()
```

#### With a title

``` py title="bubble_sort.py"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

#### With line numbers

``` py linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```  

## Annotated Text
This is annotated text (1) Click the annotation to see more details
{ .annotate}
1.  ### This text has been annotated as you can see
2.  This is line 2 of the annotation `def myfunction()`
3.
   ``` tf
resource "aws_instance" "Server" {
  ami           = "ami-0b8b44ec9a8f90422"
  instance_type = var.instance_type

  # key_name = "OpeyemiTechPro-KeyPair.ppk"
user_data = file("./userdata.sh")

  key_name = var.key_pair_name

  tags = {
    Name = "Server"
  }
}
```




#### Highlighting lines

``` py hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

## Icons and Emojs

:smile: 

:fontawesome-regular-face-laugh-wink:

:fontawesome-brands-twitter:{ .twitter }

:octicons-heart-fill-24:{ .heart }


---
icon: material/button-cursor
---

# Buttons

Material for MkDocs provides dedicated styles for primary and secondary buttons
that can be added to any link, `label` or `button` element. This is especially
useful for documents or landing pages with dedicated _call-to-actions_.

## Configuration

This configuration allows to add attributes to all inline- and block-level
elements with a simple syntax, turning any link into a button. Add the
following lines to `mkdocs.yml`:

``` yaml
markdown_extensions:
  - attr_list
```

See additional configuration options:

- [Attribute Lists]

  [Attribute Lists]: ../setup/extensions/python-markdown.md#attribute-lists

## Usage

### Adding buttons

In order to render a link as a button, suffix it with curly braces and add the
`.md-button` class selector to it. The button will receive the selected
[primary color] and [accent color] if active.

``` markdown title="Button"
[Subscribe to our newsletter](#){ .md-button }
```

<div class="result" markdown>

[Subscribe to our newsletter][Demo]{ .md-button }

</div>

  [primary color]: ../setup/changing-the-colors.md#primary-color
  [accent color]: ../setup/changing-the-colors.md#accent-color
  [Demo]: javascript:alert$.next("Demo")

### Adding primary buttons

If you want to display a filled, primary button (like on the [landing page]
of Material for MkDocs), add both, the `.md-button` and `.md-button--primary`
CSS class selectors.

``` markdown title="Button, primary"
[Subscribe to our newsletter](#){ .md-button .md-button--primary }
```

<div class="result" markdown>

[Subscribe to our newsletter][Demo]{ .md-button .md-button--primary }

</div>

  [landing page]: ../index.md

### Adding icon buttons

Of course, icons can be added to all types of buttons by using the [icon syntax]
together with any valid icon shortcode, which can be easily found with a few keystrokes through our [icon search].

``` markdown title="Button with icon"
[Send :fontawesome-solid-paper-plane:](#){ .md-button }
```

<div class="result" markdown>

[Send :fontawesome-solid-paper-plane:][Demo]{ .md-button }

</div>

  [icon syntax]: icons-emojis.md#using-icons
  [icon search]: icons-emojis.md#search


---
icon: simple/amazonwebservices
---

# AWS Projects


!!! warning

    This is a warning block


---


!!! attention

    This is an attention block


!!! example "Integrate with site navigation"

    Add the following to your `mkdocs.yml` to see how the Blog plugin can
    integrate the blog navigation with the overall navigation structure.
    Note that the only thing you need to specify at this point is the
    index page for the blog and its path must match the `blog_dir` setting,
    which is `blog` by default:

    ```yaml hl_lines="5 6"
    nav:
      - Home: index.md
      - Install: install.md
      - Usage: usage.md
      - Blog:
         - blog/index.md
    ```

    You will notice that "Blog" is duplicated in the navigation structure. To
    avoid this, you can use the `navigation.indexes` feature to make the blog
    index the seciton index page for the blog:

    ```yaml hl_lines="3 4"
    theme:
      name: material
      features:
        - navigation.indexes
    ```

!!! tip "Stand-alone blog"

    If what you need is a stand-alone blog instead of one that is integrated with
    a larger site, this can be done by using the `blog_dir` configuration option.
    To see how this is done, see [setting up a blog].
    The rest of the tutorial assumes that you are integrating the blog with
    a wider site.

[Setting up a blog]: ../../setup/setting-up-a-blog.md#blog-only

!!! tip "Adding pages"

    You can add additional pages to the blog section by putting them into
    `docs/blog` (and adding them to the navigation). The blog archive will be
    added to the navigation after these pages.  


# Changing the colors

As any proper Material Design implementation, Material for MkDocs supports
Google's original [color palette], which can be easily configured through
`mkdocs.yml`. Furthermore, colors can be customized with a few lines of CSS to
fit your brand's identity by using [CSS variables][custom colors].

  [color palette]: http://www.materialui.co/colors
  [custom colors]: #custom-colors

## Configuration

### Color palette

#### Color scheme

<!-- md:version 5.2.0 -->
<!-- md:default `default` -->

Material for MkDocs supports two color schemes: a __light mode__, which is just
called `default`, and a __dark mode__, which is called `slate`. The color scheme
can be set via `mkdocs.yml`:

``` yaml
theme:
  palette:
    scheme: default
```

Click on a tile to change the color scheme:

<div class="mdx-switch">
  <button data-md-color-scheme="default"><code>default</code></button>
  <button data-md-color-scheme="slate"><code>slate</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-scheme]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      document.body.setAttribute("data-md-color-switching", "")
      var attr = this.getAttribute("data-md-color-scheme")
      document.body.setAttribute("data-md-color-scheme", attr)
      var name = document.querySelector("#__code_0 code span.l")
      name.textContent = attr
      setTimeout(function() {
        document.body.removeAttribute("data-md-color-switching")
      })
    })
  })
</script>

#### Primary color

<!-- md:version 0.2.0 -->
<!-- md:default `indigo` -->

The primary color is used for the header, the sidebar, text links and several
other components. In order to change the primary color, set the following value
in `mkdocs.yml` to a valid color name:

``` yaml
theme:
  palette:
    primary: indigo
```

Click on a tile to change the primary color:

<div class="mdx-switch">
  <button data-md-color-primary="red"><code>red</code></button>
  <button data-md-color-primary="pink"><code>pink</code></button>
  <button data-md-color-primary="purple"><code>purple</code></button>
  <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
  <button data-md-color-primary="indigo"><code>indigo</code></button>
  <button data-md-color-primary="blue"><code>blue</code></button>
  <button data-md-color-primary="light-blue"><code>light blue</code></button>
  <button data-md-color-primary="cyan"><code>cyan</code></button>
  <button data-md-color-primary="teal"><code>teal</code></button>
  <button data-md-color-primary="green"><code>green</code></button>
  <button data-md-color-primary="light-green"><code>light green</code></button>
  <button data-md-color-primary="lime"><code>lime</code></button>
  <button data-md-color-primary="yellow"><code>yellow</code></button>
  <button data-md-color-primary="amber"><code>amber</code></button>
  <button data-md-color-primary="orange"><code>orange</code></button>
  <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
  <button data-md-color-primary="brown"><code>brown</code></button>
  <button data-md-color-primary="grey"><code>grey</code></button>
  <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
  <button data-md-color-primary="black"><code>black</code></button>
  <button data-md-color-primary="white"><code>white</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary")
      document.body.setAttribute("data-md-color-primary", attr)
      var name = document.querySelector("#__code_1 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>

See our guide below to learn how to set [custom colors].

#### Accent color

<!-- md:version 0.2.0 -->
<!-- md:default `indigo` -->

The accent color is used to denote elements that can be interacted with, e.g.
hovered links, buttons and scrollbars. It can be changed in `mkdocs.yml` by
choosing a valid color name:

``` yaml
theme:
  palette:
    accent: indigo
```

Click on a tile to change the accent color:

<style>
  .md-typeset button[data-md-color-accent] > code {
    background-color: var(--md-code-bg-color);
    color: var(--md-accent-fg-color);
  }
</style>

<div class="mdx-switch">
  <button data-md-color-accent="red"><code>red</code></button>
  <button data-md-color-accent="pink"><code>pink</code></button>
  <button data-md-color-accent="purple"><code>purple</code></button>
  <button data-md-color-accent="deep-purple"><code>deep purple</code></button>
  <button data-md-color-accent="indigo"><code>indigo</code></button>
  <button data-md-color-accent="blue"><code>blue</code></button>
  <button data-md-color-accent="light-blue"><code>light blue</code></button>
  <button data-md-color-accent="cyan"><code>cyan</code></button>
  <button data-md-color-accent="teal"><code>teal</code></button>
  <button data-md-color-accent="green"><code>green</code></button>
  <button data-md-color-accent="light-green"><code>light green</code></button>
  <button data-md-color-accent="lime"><code>lime</code></button>
  <button data-md-color-accent="yellow"><code>yellow</code></button>
  <button data-md-color-accent="amber"><code>amber</code></button>
  <button data-md-color-accent="orange"><code>orange</code></button>
  <button data-md-color-accent="deep-orange"><code>deep orange</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-accent]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-accent")
      document.body.setAttribute("data-md-color-accent", attr)
      var name = document.querySelector("#__code_2 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>

See our guide below to learn how to set [custom colors].

### Color palette toggle

<!-- md:version 7.1.0 -->
<!-- md:default none -->
<!-- md:example color-palette-toggle -->

Offering a light _and_ dark color palette makes your documentation pleasant to
read at different times of the day, so the user can choose accordingly. Add the
following lines to `mkdocs.yml`:

``` yaml
theme:
  palette: # (1)!

    # Palette toggle for light mode
    - scheme: default
      toggle:
        icon: material/brightness-7 # (2)!
        name: Switch to dark mode

    # Palette toggle for dark mode
    - scheme: slate
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
```

1.  Note that the `theme.palette` setting is now defined as a list.

2.  Enter a few keywords to find the perfect icon using our [icon search] and
    click on the shortcode to copy it to your clipboard:

    <div class="mdx-iconsearch" data-mdx-component="iconsearch">
      <input class="md-input md-input--stretch mdx-iconsearch__input" placeholder="Search icon" data-mdx-component="iconsearch-query" value="brightness" />
      <div class="mdx-iconsearch-result" data-mdx-component="iconsearch-result" data-mdx-mode="file">
        <div class="mdx-iconsearch-result__meta"></div>
        <ol class="mdx-iconsearch-result__list"></ol>
      </div>
    </div>

This configuration will render a color palette toggle next to the search bar.
Note that you can also define separate settings for [`primary`][palette.primary]
and [`accent`][palette.accent] per color palette.

The following properties must be set for each toggle:

<!-- md:option palette.toggle.icon -->

:   <!-- md:default none --> <!-- md:flag required -->
    This property must point to a valid icon path referencing any icon bundled
    with the theme, or the build will not succeed. Some popular combinations:

    * :material-brightness-7: + :material-brightness-4: – `material/brightness-7` + `material/brightness-4`
    * :material-toggle-switch: + :material-toggle-switch-off-outline: – `material/toggle-switch` + `material/toggle-switch-off-outline`
    * :material-weather-night: + :material-weather-sunny: – `material/weather-night` + `material/weather-sunny`
    * :material-eye: + :material-eye-outline: – `material/eye` + `material/eye-outline`
    * :material-lightbulb: + :material-lightbulb-outline: – `material/lightbulb` + `material/lightbulb-outline`

<!-- md:option palette.toggle.name -->

:   <!-- md:default none --> <!-- md:flag required -->
    This property is used as the toggle's `title` attribute and should be set to
    a discernable name to improve accessibility. It's rendered as a [tooltip].

  [palette.scheme]: #color-scheme
  [palette.primary]: #primary-color
  [palette.accent]: #accent-color
  [icon search]: ../reference/icons-emojis.md#search
  [tooltip]: ../reference/tooltips.md

### System preference

<!-- md:version 7.1.0 -->
<!-- md:default none -->
<!-- md:example color-palette-system-preference -->

Each color palette can be linked to the user's system preference for light and
dark appearance by using a media query. Simply add a `media` property next to
the `scheme` definition in `mkdocs.yml`:

``` yaml
theme:
  palette:

    # Palette toggle for light mode
    - media: "(prefers-color-scheme: light)"
      scheme: default
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode

    # Palette toggle for dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
```

When the user first visits your site, the media queries are evaluated in the
order of their definition. The first media query that matches selects the
default color palette.

#### Automatic light / dark mode

<!-- md:version 9.5.0 -->
<!-- md:flag experimental -->
<!-- md:example color-palette-system-preference -->

Newer operating systems allow to automatically switch between light and dark
appearance during day and night times. Material for MkDocs adds support for
automatic light / dark mode, delegating color palette selection to the user's
operating system. Add the following lines to `mkdocs.yml`:

``` yaml
theme:
  palette:

    # Palette toggle for automatic mode
    - media: "(prefers-color-scheme)"
      toggle:
        icon: material/brightness-auto
        name: Switch to light mode

    # Palette toggle for light mode
    - media: "(prefers-color-scheme: light)"
      scheme: default # (1)!
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode

    # Palette toggle for dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      toggle:
        icon: material/brightness-4
        name: Switch to system preference
```

1.  You can also define separate settings for [`primary`][palette.primary] and
    [`accent`][palette.accent] per color palette, i.e. different colors for
    light and dark mode.

Material for MkDocs will now change the color palette each time the operating
system switches between light and dark appearance, even when the user doesn't
reload the site.

  [Insiders]: ../insiders/index.md

## Customization

### Custom colors

<!-- md:version 5.0.0 -->
<!-- md:example custom-colors -->

Material for MkDocs implements colors using [CSS variables] (custom
properties). If you want to customize the colors beyond the palette (e.g. to
use your brand-specific colors), you can add an [additional style sheet] and
tweak the values of the CSS variables.

First, set the [`primary`][palette.primary] or [`accent`][palette.accent] values
in `mkdocs.yml` to `custom`, to signal to the theme that you want to define
custom colors, e.g., when you want to override the `primary` color:

``` yaml
theme:
  palette:
    primary: custom
```

Let's say you're :fontawesome-brands-youtube:{ style="color: #EE0F0F" }
__YouTube__, and want to set the primary color to your brand's palette. Just
add:

=== ":octicons-file-code-16: `docs/stylesheets/extra.css`"

    ``` css
    :root {
      --md-primary-fg-color:        #EE0F0F;
      --md-primary-fg-color--light: #ECB7B7;
      --md-primary-fg-color--dark:  #90030C;
    }
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

See the file containing the [color definitions] for a list of all CSS variables.

  [CSS variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
  [color definitions]: https://github.com/squidfunk/mkdocs-material/blob/master/src/templates/assets/stylesheets/main/_colors.scss
  [additional style sheet]: ../customization.md#additional-css


### Custom color schemes

Besides overriding specific colors, you can create your own, named color scheme
by wrapping the definitions in a `[data-md-color-scheme="..."]`
[attribute selector], which you can then set via `mkdocs.yml` as described
in the [color schemes][palette.scheme] section:

=== ":octicons-file-code-16: `docs/stylesheets/extra.css`"

    ``` css
    [data-md-color-scheme="youtube"] {
      --md-primary-fg-color:        #EE0F0F;
      --md-primary-fg-color--light: #ECB7B7;
      --md-primary-fg-color--dark:  #90030C;
    }
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml
    theme:
      palette:
        scheme: youtube
    extra_css:
      - stylesheets/extra.css
    ```

Additionally, the `slate` color scheme defines all of it's colors via `hsla`
color functions and deduces its colors from the `--md-hue` CSS variable. You
can tune the `slate` theme with:

``` css
[data-md-color-scheme="slate"] {
  --md-hue: 210; /* (1)! */
}
```

1.  The `hue` value must be in the range of `[0, 360]`

  [attribute selector]: https://www.w3.org/TR/selectors-4/#attribute-selectors

