---
icon: simple/amazonwebservices
title: This is a Draft for reference MkDocs
description: This is a description of this page
subtitle: This is the sub-title of this page
comments: true 
---

![image](assets/images/favicon.png "Opeyemi Okuboyejo")


<figure markdown="1">
![image](assets/images/favicon.png "Opeyemi Okuboyejo"){ width="300" }
<figcaption><strong>Opeyemi Okuboyejo</strong></figcaption>
</figure>

## MarkDown Basic Syntax

[MarkDown Basic Syntax](https://www.markdownguide.org/basic-syntax "Markdown Basic Syntax")



## Image Handling

??? youtube "Watch this YouTube Video"
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NY7DHvo1XVM?si=KfN1qCMItT-M3QCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    Nice Video

## Embed a YouTube Video on page

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NY7DHvo1XVM?si=KfN1qCMItT-M3QCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## This is image positioning


??? note "Centred image with caption and alt text"
    <figure markdown="1">
    ![image](assets/images/favicon.png "Opeyemi Okuboyejo")
    <figcaption><strong>Opeyemi Okuboyejo</strong></figcaption>
    </figure>

??? youtube "Centred image with caption and alt text"
    <figure markdown="1">
    ![image](assets/images/favicon.png "Opeyemi Okuboyejo")
    <figcaption>Profile Image Caption</figcaption>
    </figure>

??? youtube "Clickable Centred image with caption and alt text"
    <figure markdown="1">
    [![Opeyemi Picture](assets/images/favicon.png "Opeyemi Okuboyejo")](https://opeyemitech.pro)
    <figcaption>Profile Image Caption</figcaption>
    </figure>

<figure markdown="1">
[![Opeyemi Picture](assets/images/favicon.png "Opeyemi Okuboyejo")](https://opeyemitech.pro)
</figure>

[![Opeyemi Picture](assets/images/favicon.png "Opeyemi Okuboyejo")](https://opeyemitech.pro)


<figure markdown="span">
![Image title](https://dummyimage.com/600x400/){ width="300" }
<figcaption>Image caption</figcaption>
</figure>

<figure markdown="1">
![image](https://dummyimage.com/600x400/)
<figcaption>Image 2 caption</figcaption>
</figure>

<figure markdown="1">
![image](https://dummyimage.com/600x400/)
</figure>

!!! warning

    This is a warning block

???+ warning

     This is a warning block expanded by default

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


## Getting started

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

## Terraform Page

### Terraform AWS


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

## Icons and Emojis

:smile: 

:fontawesome-regular-face-laugh-wink:

:fontawesome-brands-twitter:{ .twitter }

:octicons-heart-fill-24:{ .heart }


---
icon: material/button-cursor
---

## Buttons

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

## AWS Projects


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


## Changing the colors

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

---
icon: material/alert-outline
---

## Admonitions

Admonitions, also known as _call-outs_, are an excellent choice for including
side content without significantly interrupting the document flow. Material for
MkDocs provides several different types of admonitions and allows for the
inclusion and nesting of arbitrary content.

## Configuration

This configuration enables admonitions, allows to make them collapsible and to
nest arbitrary content inside admonitions. Add the following lines to
`mkdocs.yml`:

``` yaml
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
```

See additional configuration options:

- [Admonition]
- [Details]
- [SuperFences]

  [Admonition]: ../setup/extensions/python-markdown.md#admonition
  [Details]: ../setup/extensions/python-markdown-extensions.md#details
  [SuperFences]: ../setup/extensions/python-markdown-extensions.md#superfences

### Admonition icons

<!-- md:version 8.3.0 -->

Each of the supported admonition types has a distinct icon, which can be changed
to any icon bundled with the theme, or even a [custom icon]. Add the following
lines to `mkdocs.yml`:

``` yaml
theme:
  icon:
    admonition:
      <type>: <icon> # (1)!
```

1.  Enter a few keywords to find the perfect icon using our [icon search] and
    click on the shortcode to copy it to your clipboard:

    <div class="mdx-iconsearch" data-mdx-component="iconsearch">
      <input class="md-input md-input--stretch mdx-iconsearch__input" placeholder="Search icon" data-mdx-component="iconsearch-query" value="alert" />
      <div class="mdx-iconsearch-result" data-mdx-component="iconsearch-result" data-mdx-mode="file">
        <div class="mdx-iconsearch-result__meta"></div>
        <ol class="mdx-iconsearch-result__list"></ol>
      </div>
    </div>

??? example "Expand to show alternate icon sets"

    === ":octicons-mark-github-16: Octicons"

        ``` yaml
        theme:
          icon:
            admonition:
              note: octicons/tag-16
              abstract: octicons/checklist-16
              info: octicons/info-16
              tip: octicons/squirrel-16
              success: octicons/check-16
              question: octicons/question-16
              warning: octicons/alert-16
              failure: octicons/x-circle-16
              danger: octicons/zap-16
              bug: octicons/bug-16
              example: octicons/beaker-16
              quote: octicons/quote-16
        ```


    === ":fontawesome-brands-font-awesome: FontAwesome"

        ``` yaml
        theme:
          icon:
            admonition:
              note: fontawesome/solid/note-sticky
              abstract: fontawesome/solid/book
              info: fontawesome/solid/circle-info
              tip: fontawesome/solid/bullhorn
              success: fontawesome/solid/check
              question: fontawesome/solid/circle-question
              warning: fontawesome/solid/triangle-exclamation
              failure: fontawesome/solid/bomb
              danger: fontawesome/solid/skull
              bug: fontawesome/solid/robot
              example: fontawesome/solid/flask
              quote: fontawesome/solid/quote-left
        ```

  [custom icon]: ../setup/changing-the-logo-and-icons.md#additional-icons
  [supported types]: #supported-types
  [icon search]: icons-emojis.md#search

## Usage

Admonitions follow a simple syntax: a block starts with `!!!`, followed by a
single keyword used as a [type qualifier]. The content of the block follows on
the next line, indented by four spaces:

``` markdown title="Admonition"
!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

  [type qualifier]: #supported-types

### Changing the title

By default, the title will equal the type qualifier in titlecase. However, it
can be changed by adding a quoted string containing valid Markdown (including
links, formatting, ...) after the type qualifier:

``` markdown title="Admonition with custom title"
!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

### Removing the title

Similar to [changing the title], the icon and title can be omitted entirely by
adding an empty string directly after the type qualifier. Note that this will
not work for [collapsible blocks]:

``` markdown title="Admonition without title"
!!! note ""

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! note ""

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

  [changing the title]: #changing-the-title
  [collapsible blocks]: #collapsible-blocks

### Collapsible blocks

When [Details] is enabled and an admonition block is started with `???` instead
of `!!!`, the admonition is rendered as a collapsible block with a small toggle
on the right side:

``` markdown title="Admonition, collapsible"
??? note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

??? note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

Adding a `+` after the `???` token renders the block expanded:

``` markdown title="Admonition, collapsible and initially expanded"
???+ note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

???+ note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

### Inline blocks

Admonitions can also be rendered as inline blocks (e.g., for sidebars), placing
them to the right using the `inline` + `end` modifiers, or to the left using
only the `inline` modifier:

=== ":octicons-arrow-right-16: inline end"

    !!! info inline end "Lorem ipsum"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

    ``` markdown
    !!! info inline end "Lorem ipsum"

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.
    ```

    Use `inline end` to align to the right (left for rtl languages).

=== ":octicons-arrow-left-16: inline"

    !!! info inline "Lorem ipsum"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

    ``` markdown
    !!! info inline "Lorem ipsum"

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.
    ```

    Use `inline` to align to the left (right for rtl languages).

__Important__: admonitions that use the `inline` modifiers _must_ be declared
prior to the content block you want to place them beside. If there's
insufficient space to render the admonition next to the block, the admonition
will stretch to the full width of the viewport, e.g., on mobile viewports.

### Supported types

Following is a list of type qualifiers provided by Material for MkDocs, whereas
the default type, and thus fallback for unknown type qualifiers, is `note`[^1]:

  [^1]:
    Previously, some of the supported types defined more than one qualifier.
    For example, authors could use `summary` or `tldr` as alternative qualifiers
    to render an [`abstract`](#+type:abstract) admonition. As this increased the
    size of the CSS that is shipped with Material for MkDocs, the additional
    type qualifiers are now all deprecated and will be removed in the next major
    version. This will also be mentioned in the upgrade guide.

<!-- md:option type:note -->

:   !!! note

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:abstract -->

:   !!! abstract

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:info -->

:   !!! info

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:tip -->

:   !!! tip

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:success -->

:   !!! success

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:question -->

:   !!! question

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:warning -->

:   !!! warning

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:failure -->

:   !!! failure

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:danger -->

:   !!! danger

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:bug -->

:   !!! bug

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:example -->

:   !!! example

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<!-- md:option type:quote -->

:   !!! quote

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

## Customization

### Classic admonitions

Prior to version <!-- md:version 8.5.6 -->, admonitions had a slightly
different appearance:

!!! classic "Note"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

If you want to restore this appearance, add the following CSS to an
[additional style sheet]:

<style>
  .md-typeset .admonition.classic {
    border-width: 0;
    border-left-width: 4px;
  }
</style>

=== ":octicons-file-code-16: `docs/stylesheets/extra.css`"

    ``` css
    .md-typeset .admonition,
    .md-typeset details {
      border-width: 0;
      border-left-width: 4px;
    }
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

### Custom admonitions

If you want to add a custom admonition type, all you need is a color and an
`*.svg` icon. Copy the icon's code from the [`.icons`][custom icons] folder
and add the following CSS to an [additional style sheet]:

<style>
  :root {
    --md-admonition-icon--pied-piper: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M244 246c-3.2-2-6.3-2.9-10.1-2.9-6.6 0-12.6 3.2-19.3 3.7l1.7 4.9zm135.9 197.9c-19 0-64.1 9.5-79.9 19.8l6.9 45.1c35.7 6.1 70.1 3.6 106-9.8-4.8-10-23.5-55.1-33-55.1zM340.8 177c6.6 2.8 11.5 9.2 22.7 22.1 2-1.4 7.5-5.2 7.5-8.6 0-4.9-11.8-13.2-13.2-23 11.2-5.7 25.2-6 37.6-8.9 68.1-16.4 116.3-52.9 146.8-116.7C548.3 29.3 554 16.1 554.6 2l-2 2.6c-28.4 50-33 63.2-81.3 100-31.9 24.4-69.2 40.2-106.6 54.6l-6.3-.3v-21.8c-19.6 1.6-19.7-14.6-31.6-23-18.7 20.6-31.6 40.8-58.9 51.1-12.7 4.8-19.6 10-25.9 21.8 34.9-16.4 91.2-13.5 98.8-10zM555.5 0l-.6 1.1-.3.9.6-.6zm-59.2 382.1c-33.9-56.9-75.3-118.4-150-115.5l-.3-6c-1.1-13.5 32.8 3.2 35.1-31l-14.4 7.2c-19.8-45.7-8.6-54.3-65.5-54.3-14.7 0-26.7 1.7-41.4 4.6 2.9 18.6 2.2 36.7-10.9 50.3l19.5 5.5c-1.7 3.2-2.9 6.3-2.9 9.8 0 21 42.8 2.9 42.8 33.6 0 18.4-36.8 60.1-54.9 60.1-8 0-53.7-50-53.4-60.1l.3-4.6 52.3-11.5c13-2.6 12.3-22.7-2.9-22.7-3.7 0-43.1 9.2-49.4 10.6-2-5.2-7.5-14.1-13.8-14.1-3.2 0-6.3 3.2-9.5 4-9.2 2.6-31 2.9-21.5 20.1L15.9 298.5c-5.5 1.1-8.9 6.3-8.9 11.8 0 6 5.5 10.9 11.5 10.9 8 0 131.3-28.4 147.4-32.2 2.6 3.2 4.6 6.3 7.8 8.6 20.1 14.4 59.8 85.9 76.4 85.9 24.1 0 58-22.4 71.3-41.9 3.2-4.3 6.9-7.5 12.4-6.9.6 13.8-31.6 34.2-33 43.7-1.4 10.2-1 35.2-.3 41.1 26.7 8.1 52-3.6 77.9-2.9 4.3-21 10.6-41.9 9.8-63.5l-.3-9.5c-1.4-34.2-10.9-38.5-34.8-58.6-1.1-1.1-2.6-2.6-3.7-4 2.2-1.4 1.1-1 4.6-1.7 88.5 0 56.3 183.6 111.5 229.9 33.1-15 72.5-27.9 103.5-47.2-29-25.6-52.6-45.7-72.7-79.9zm-196.2 46.1v27.2l11.8-3.4-2.9-23.8zm-68.7-150.4l24.1 61.2 21-13.8-31.3-50.9zm84.4 154.9l2 12.4c9-1.5 58.4-6.6 58.4-14.1 0-1.4-.6-3.2-.9-4.6-26.8 0-36.9 3.8-59.5 6.3z"/></svg>')
  }
  .md-typeset .admonition.pied-piper,
  .md-typeset details.pied-piper {
    border-color: rgb(43, 155, 70);
  }
  .md-typeset .pied-piper > .admonition-title,
  .md-typeset .pied-piper > summary {
    background-color: rgba(43, 155, 70, 0.1);
  }
  .md-typeset .pied-piper > .admonition-title::before,
  .md-typeset .pied-piper > summary::before {
    background-color: rgb(43, 155, 70);
    -webkit-mask-image: var(--md-admonition-icon--pied-piper);
            mask-image: var(--md-admonition-icon--pied-piper);
  }
</style>

=== ":octicons-file-code-16: `docs/stylesheets/extra.css`"

    ``` css
    :root {
      --md-admonition-icon--pied-piper: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M244 246c-3.2-2-6.3-2.9-10.1-2.9-6.6 0-12.6 3.2-19.3 3.7l1.7 4.9zm135.9 197.9c-19 0-64.1 9.5-79.9 19.8l6.9 45.1c35.7 6.1 70.1 3.6 106-9.8-4.8-10-23.5-55.1-33-55.1zM340.8 177c6.6 2.8 11.5 9.2 22.7 22.1 2-1.4 7.5-5.2 7.5-8.6 0-4.9-11.8-13.2-13.2-23 11.2-5.7 25.2-6 37.6-8.9 68.1-16.4 116.3-52.9 146.8-116.7C548.3 29.3 554 16.1 554.6 2l-2 2.6c-28.4 50-33 63.2-81.3 100-31.9 24.4-69.2 40.2-106.6 54.6l-6.3-.3v-21.8c-19.6 1.6-19.7-14.6-31.6-23-18.7 20.6-31.6 40.8-58.9 51.1-12.7 4.8-19.6 10-25.9 21.8 34.9-16.4 91.2-13.5 98.8-10zM555.5 0l-.6 1.1-.3.9.6-.6zm-59.2 382.1c-33.9-56.9-75.3-118.4-150-115.5l-.3-6c-1.1-13.5 32.8 3.2 35.1-31l-14.4 7.2c-19.8-45.7-8.6-54.3-65.5-54.3-14.7 0-26.7 1.7-41.4 4.6 2.9 18.6 2.2 36.7-10.9 50.3l19.5 5.5c-1.7 3.2-2.9 6.3-2.9 9.8 0 21 42.8 2.9 42.8 33.6 0 18.4-36.8 60.1-54.9 60.1-8 0-53.7-50-53.4-60.1l.3-4.6 52.3-11.5c13-2.6 12.3-22.7-2.9-22.7-3.7 0-43.1 9.2-49.4 10.6-2-5.2-7.5-14.1-13.8-14.1-3.2 0-6.3 3.2-9.5 4-9.2 2.6-31 2.9-21.5 20.1L15.9 298.5c-5.5 1.1-8.9 6.3-8.9 11.8 0 6 5.5 10.9 11.5 10.9 8 0 131.3-28.4 147.4-32.2 2.6 3.2 4.6 6.3 7.8 8.6 20.1 14.4 59.8 85.9 76.4 85.9 24.1 0 58-22.4 71.3-41.9 3.2-4.3 6.9-7.5 12.4-6.9.6 13.8-31.6 34.2-33 43.7-1.4 10.2-1 35.2-.3 41.1 26.7 8.1 52-3.6 77.9-2.9 4.3-21 10.6-41.9 9.8-63.5l-.3-9.5c-1.4-34.2-10.9-38.5-34.8-58.6-1.1-1.1-2.6-2.6-3.7-4 2.2-1.4 1.1-1 4.6-1.7 88.5 0 56.3 183.6 111.5 229.9 33.1-15 72.5-27.9 103.5-47.2-29-25.6-52.6-45.7-72.7-79.9zm-196.2 46.1v27.2l11.8-3.4-2.9-23.8zm-68.7-150.4l24.1 61.2 21-13.8-31.3-50.9zm84.4 154.9l2 12.4c9-1.5 58.4-6.6 58.4-14.1 0-1.4-.6-3.2-.9-4.6-26.8 0-36.9 3.8-59.5 6.3z"/></svg>')
    }
    .md-typeset .admonition.pied-piper,
    .md-typeset details.pied-piper {
      border-color: rgb(43, 155, 70);
    }
    .md-typeset .pied-piper > .admonition-title,
    .md-typeset .pied-piper > summary {
      background-color: rgba(43, 155, 70, 0.1);
    }
    .md-typeset .pied-piper > .admonition-title::before,
    .md-typeset .pied-piper > summary::before {
      background-color: rgb(43, 155, 70);
      -webkit-mask-image: var(--md-admonition-icon--pied-piper);
              mask-image: var(--md-admonition-icon--pied-piper);
    }
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

After applying the customization, you can use the custom admonition type:

``` markdown title="Admonition with custom type"
!!! pied-piper "Pied Piper"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

!!! pied-piper "Pied Piper"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

  [custom icons]: https://github.com/squidfunk/mkdocs-material/tree/master/material/templates/.icons
  [additional style sheet]: ../customization.md#additional-css

