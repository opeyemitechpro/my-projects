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
