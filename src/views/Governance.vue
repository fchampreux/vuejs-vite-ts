<script setup lang="ts">
import RightPane from '@/components/RightPane.vue';
import { ref } from 'vue';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

const showRightPane = ref(true);

const sections = [
  {
    title: 'Gouvernance des données',
    content: 'La gouvernance des données est un ensemble de principes, de politiques et de processus qui garantissent que les données sont gérées de manière efficace et sécurisée.',
    subsections: [
      'Définition des rôles et responsabilités',
      'Politiques de gestion des données',
      'Standards et procédures',
      'Conformité et sécurité'
    ]
  },
  {
    title: 'Qualité des données',
    content: 'La qualité des données est essentielle pour prendre des décisions éclairées et maintenir l\'efficacité opérationnelle.',
    subsections: [
      'Exactitude des données',
      'Cohérence des données',
      'Complétude des données',
      'Actualité des données'
    ]
  },
  {
    title: 'Gestion des métadonnées',
    content: 'Les métadonnées fournissent le contexte nécessaire pour comprendre et utiliser efficacement les données.',
    subsections: [
      'Documentation des données',
      'Catalogage des données',
      'Lignage des données',
      'Classification des données'
    ]
  }
];
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Gouvernance</h1>
        
        <div class="space-y-12">
          <div v-for="(section, index) in sections" :key="index" class="bg-white shadow rounded-lg overflow-hidden">
            <div class="px-6 py-5">
              <h2 class="text-xl font-semibold text-gray-900">{{ section.title }}</h2>
              <p class="mt-3 text-gray-600">{{ section.content }}</p>
              
              <ul class="mt-4 space-y-3">
                <li v-for="(subsection, subIndex) in section.subsections" 
                    :key="subIndex"
                    class="flex items-center text-gray-700 hover:text-indigo-600 cursor-pointer">
                  <ChevronRightIcon class="h-4 w-4 mr-2" />
                  {{ subsection }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RightPane
      title="Documentation"
      theme="light"
      :closeable="true"
      width="400px"
    >
      <div class="p-6 space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-900">Guide de gouvernance</h3>
          <p class="mt-2 text-gray-600">Découvrez les principes fondamentaux de la gouvernance des données et comment les mettre en œuvre efficacement.</p>
        </div>

        <div>
          <h4 class="text-md font-medium text-gray-900">Documents essentiels</h4>
          <ul class="mt-3 space-y-2">
            <li class="flex items-center text-gray-600 hover:text-indigo-600 cursor-pointer">
              <ChevronRightIcon class="h-4 w-4 mr-2" />
              Guide de démarrage rapide
            </li>
            <li class="flex items-center text-gray-600 hover:text-indigo-600 cursor-pointer">
              <ChevronRightIcon class="h-4 w-4 mr-2" />
              Meilleures pratiques
            </li>
            <li class="flex items-center text-gray-600 hover:text-indigo-600 cursor-pointer">
              <ChevronRightIcon class="h-4 w-4 mr-2" />
              Études de cas
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-md font-medium text-gray-900">Ressources complémentaires</h4>
          <ul class="mt-3 space-y-2">
            <li class="flex items-center text-gray-600 hover:text-indigo-600 cursor-pointer">
              <ChevronRightIcon class="h-4 w-4 mr-2" />
              Webinaires
            </li>
            <li class="flex items-center text-gray-600 hover:text-indigo-600 cursor-pointer">
              <ChevronRightIcon class="h-4 w-4 mr-2" />
              Formations
            </li>
            <li class="flex items-center text-gray-600 hover:text-indigo-600 cursor-pointer">
              <ChevronRightIcon class="h-4 w-4 mr-2" />
              FAQ
            </li>
          </ul>
        </div>
      </div>
    </RightPane>
  </div>
</template>