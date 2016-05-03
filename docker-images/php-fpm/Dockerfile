FROM ubuntu

RUN sudo apt-get -y update && apt-get -y upgrade
RUN sudo apt-get -y install php5-fpm

RUN echo "cgi.fix_pathinfo=0" > /etc/php5/fpm/conf.d/local.ini
RUN echo "date.timezone = Europe/Paris" >> /etc/php5/fpm/conf.d/local.ini
RUN sed -i -e "s/^listen =.*$/listen = 9000/" /etc/php5/fpm/pool.d/www.conf
RUN sed -i -e "s/^;pm\.status_path/pm.status_path/" /etc/php5/fpm/pool.d/www.conf

EXPOSE 9000

CMD php5-fpm -F