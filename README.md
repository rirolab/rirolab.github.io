# rirolab.github.io

Check tutorials
https://nachwon.github.io/jekyllblog/


How to compile and run the server?
~~~~bash
bundle exec jekyll serve
~~~~


# FAQ
## Port error
If you have "jekyll 2.2.0 | Error: Address already in use - bind(2)", you have to check which process is using the same port. If a 'nxd' process is using port 4000, you may need to remove the noMachine software:

~~~~bash
sudo dpkg -r nomachine
~~~~

You also need to reboot.

