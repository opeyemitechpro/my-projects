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
