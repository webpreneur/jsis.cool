[Practical Git for Everyday Professional Use](https://egghead.io/courses/practical-git-for-everyday-professional-use)

## Tags

`git tag v1.0.0`

To list all the tags, type:
`git tag`

To push the tags to the remote, the `--tags` flag must be used.
`git push --tags`

The `-a` stands for annotation.
If you omit the `-m`, then multiple lines could be written inside the terminal.
`git tag -a v1.0.1 -m "Fixed a minor bug."`

## Log

`git log --oneline`


## Bisect

Git bisect is used for finding the source of a bug in a Git repository by using a binary search algorithm to identify the commit that introduced the bug.
To use Git bisect, you can follow these steps:

1. Start the bisect process: `git bisect start`
2. Mark a known bad commit: `git bisect bad`
3. Mark a known good commit: `git bisect good <good_commit_hash>`
4. Test the code at the current commit: `git bisect run <script_to_run_tests>`
5. Repeat steps 3-4 until Git bisect finds the commit that introduced the bug.
6. End the bisect process: `git bisect reset`

Note: Replace `<good_commit_hash>` and `<script_to_run_tests>` with the actual values.


## Git Hooks

To use Git hooks, you can follow these steps:

1. Create a hook script in the `.git/hooks` directory of your Git repository.
2. Make the script executable: `chmod +x <hook_script_name>`
3. Configure the hook script to run automatically when a specified Git event occurs. For example, you can configure a pre-commit hook to run before every commit.
4. Test the hook script by triggering the event that it is associated with.

Note: The available hooks are `pre-commit`, `post-commit`, `pre-push`, `post-receive`, etc. Hook scripts can be written in any language and can perform various tasks such as validating code, running tests, or sending notifications.


## Git Config

1. Local: `.git/config`
2. Global: `~/.gitconfig`

`git config --list`

## Git Ignore

Global: `~/.gitignore_global`

`git config --global core.excludesfile ~/.gitignore_global`