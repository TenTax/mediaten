<template>
  <footer class="the-footer">
    <app-container class="the-footer__container">
      <nav
        v-for="({ title, links }) in menu"
        :key="title"
        class="the-footer__menu"
      >
        <div class="the-footer__menu-title">
          {{ title }}
        </div>
        <ul class="the-footer__menu-list">
          <li
            v-for="({ label, link }) in links"
            :key="label"
            class="the-footer__menu-item"
          >
            <app-link
              thin
              hoverable
              class="the-footer__menu-link"
              :to="link"
            >
              {{ label }}
            </app-link>
          </li>
        </ul>
      </nav>
      <div class="the-footer__menu">
        <ul class="the-footer__menu-list">
          <li class="the-footer__menu-item the-footer__menu-item_sparse">
            © ООО «КОМПАНИЯ», 2022 Юр. адрес: Москва, Пушкина б-р, 1, оф. 123
          </li>
        </ul>
      </div>
    </app-container>
  </footer>
</template>

<script>
import AppContainer from '@/components/AppContainer'
import AppLink from '@/components/AppLink'

export default {
  name: 'TheFooter',

  components: {
    AppContainer,
    AppLink,
  },

  data () {
    return {
      menu: [
        {
          title: 'Полезные ссылки',
          links: [
            { label: 'Маркетплейс', link: '/' },
            { label: 'Поставщикам', link: '/' },
            { label: 'Заказчикам', link: '/' },
            { label: 'Контакты', link: '/' },
          ],
        },
        {
          title: 'Пользователям',
          links: [
            { label: 'Техническая поддержка', link: '/' },
            { label: 'Обучающие материалы', link: '/' },
            { label: 'Условия и тарифы', link: '/' },
            { label: 'Акции', link: '/' },
          ],
        },
        {
          title: 'Юридическая информация',
          links: [
            { label: 'Агентский договор', link: '/' },
            { label: 'Соглашения об АСП', link: '/' },
            { label: 'Политика обработки данных', link: '/' },
            { label: 'Политика конфиденциальности', link: '/' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.the-footer {
  &::before {
    display: block;
    width: 100%;
    height: 2px;
    background-image: url('@/assets/border.svg');
    background-repeat: repeat-x;
    content: '';
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    padding-top: 56px;
    padding-bottom: 83px;
  }

  &__menu-title {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 13px;
  }

  &__menu-list {
    list-style: none;
  }

  &__menu-item {
    font-weight: 400;
    font-size: 13px;
  }

  &__menu-item_sparse {
    line-height: 1.5;
  }

  &__menu-item:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
