# Co exploration study

The following repository contains the code that handles data processing and some visualization of the <TODO paper name> co-exploration study done by X. Ye et al.
It provides an input in which data can be put and provides the given input data and the produced output data for validation purposes.

## Data transformation steps

### Step 1: Load the miro csv file.

We know the columns exported by miro follow the csv header format: `title,content,unknown1,labels,unknown2,date`.

We load in the data based on this format.

### Step 2: Filter out data

We filter out a row if:

- There is no content (i.e if it is a shape)
- If the title starts with "co-exploration" (case insensitive)

### Step 3: Transform data

The miro title becomes the `activity` column.

The `date` column is the "\<start date\> - \<due date\>" in miro.

We create two additional columns for `group` and `participants` based on a specific label format:

- The format is specified as: "G\<group number> and P\<participant number>+<....>"

All other labels are kept in the `labels` column.
We also add a `category` column is based on mapping several well known labels (as defined in the coding book) to their respective categories.

The text of each card is parsed in order to retrieve the following information:

- The `content` of the activity
- The `tools` used
- The `work style`
- The `outputs` generated
- The `co-exploration` that happened
